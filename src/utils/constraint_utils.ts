import fhirpath from "fhirpath";
import { ProfileTree, ProfileTreeNode } from "./buildTree";
import { ConstraintItem } from "@/types";
import { id, ro } from "date-fns/locale";
import { ElementDefinitionConstraint } from "fhir/r4";



export class ConstraintResolver {
    private profileTree: ProfileTree;
    private constraintTree : ProfileTreeNode[];
    private resource: any;
    private evaluationResult: {node:ProfileTreeNode, constraints:ElementDefinitionConstraint[]}[];


    constructor(profileTree:ProfileTree){
        this.profileTree = profileTree;
        this.constraintTree = [];
        this.evaluationResult = [];
        this.createConstraintTree();
        // DEVELOP
        console.log("constraint tree");
        console.log(this.constraintTree);
        // DEVELOP
    }

    setResource(resource:any){
        this.resource = resource;
    }

    evaluate(){
        this.constraintTree.forEach(node =>{
            const constraints = node.element.constraint;
            if(constraints){
                let failedConstraints: ElementDefinitionConstraint[] = [];
                constraints.forEach(constraint =>{
                    const expression = [node.element.id, constraint.expression].join(".");
                    if(expression){
                        const result = fhirpath.evaluate(this.resource, expression);
                        if(!result[0]){
                            failedConstraints.push(constraint);
                        }
                    }
                })
                if(failedConstraints.length > 0){
                    this.evaluationResult.push({
                        node: node,
                        constraints: failedConstraints
                    })
                }
            }
        })
        console.log("evaluationResult");
        console.log(this.evaluationResult);
    }

    private addRootNode(){
        const rootNode = this.profileTree.find(item => {
            return item.dataPath === "root";
        });
        if(rootNode){
            this.constraintTree.push(rootNode);
        };
    }

    private createConstraintTree(){
        let firstChildren: ProfileTreeNode[];
        firstChildren = this.getFirstChildren();
        firstChildren.forEach(this.flagNodesAndBuildTree, this);
        this.handleChoiceType();
        this.addRootNode();
        this.ensureElementIds();
    }

    private ensureElementIds(){
        // the profile tree nodes that were created from complex types do not have correct id in their element
        // correct IDs needed for correct expression generation
        const resourceType = this.getResourceType();
        if(resourceType){
            this.constraintTree.forEach(node =>{
                this.updateBaseId(node, resourceType);
            });
        };

    }

    private updateBaseId(node:ProfileTreeNode, resourceType:string){
        const dataPath = node.dataPath;
        const updatedDataPath = dataPath.replace("root", resourceType);
        node.element.id = updatedDataPath;
    }

    private getResourceType(){
        const rootNode = this.getRootNode();
        const resourceType = rootNode?.baseId;
        return resourceType;
    }

    private getRootNode(){
        const rootNode = this.constraintTree.find(node => {
            return node.dataPath === "root";
        })
        return rootNode;
    }


    // recursive method to parse profileTree for constraintTree construction
    // a node is to be included if a descendant is primitive with value
    private flagNodesAndBuildTree(node:ProfileTreeNode): {selfPath:string, includeParent:boolean}{
        let includeParent = false;
        let childrenResponses: {selfPath:string, includeParent:boolean}[] = [];
        let selfPath = node.dataPath;

        // end of recursion
        if(node.isPrimitive && node.value){
            includeParent = true;
        }
        else if(node.childPaths.length > 0){
            for (let i = 0; i< node.childPaths.length; i++){
                const childPath = node.childPaths[i];
                const childNode = this.getChildNodeFromPath(childPath);
                // recursive call
                if(childNode){
                     childrenResponses.push(this.flagNodesAndBuildTree(childNode!));
                }
            }
        }
        // if any of the children is to be included, then the parent is to be included
        if(includeParent || childrenResponses.some(response => response.includeParent)){
            this.constraintTree.push(node);
            includeParent = true;
            this.updateChildPaths(node, childrenResponses);
        }
        return {selfPath, includeParent};
    }

    private updateChildPaths(node: ProfileTreeNode, childrenResponses: {selfPath:string, includeParent:boolean}[]){
        // update the childPaths of the node
        let newChildPaths: string[] = [];
        childrenResponses.forEach(response => {
            if(response.includeParent){
                newChildPaths.push(response.selfPath);
            }
        });
        node.childPaths = newChildPaths;
    }

    private getChildNodeFromPath(childPath: string){
        const childNode = this.profileTree.find(node => node.dataPath === childPath);
        return childNode;
    }

    private getFirstChildren(){
        let firstChildren: ProfileTreeNode[] = [];
        this.profileTree.forEach((node)=>{
            // find nodes one level below the root node
            if(node.dataPath.split(".").length == 2){
                firstChildren.push(node);
            }
        })
        return firstChildren;
    }

    private handleChoiceType(){
        // find all choice nodes
        const choiceNodes = this.constraintTree.filter(node =>{
            return node.dataPath.includes("[x]");
        })
        choiceNodes.forEach(node => {
            let parentFromChildren = this.getParentFromChildren(node);
            this.updateChoiceType(node, parentFromChildren);
        });
        
    }
    
    private getParentFromChildren(node:ProfileTreeNode){
        let parentFromChildren = [];
        for(let i=0; i< node.childPaths.length; i++){
            const childPath = node.childPaths[i];
            const indexX = node.dataPath.split(".").findIndex(element =>{return element.includes("[x]")});
            parentFromChildren.push({parentFromChildren:childPath.split(".")[indexX], index: indexX});
        }
        return parentFromChildren
    }

    private updateChoiceType(node:ProfileTreeNode, parentFromChildren:{parentFromChildren:string, index:number}[]){
        // assuming there is only one parent from children
        let pathArr = node.dataPath.split(".");
        pathArr[parentFromChildren[0].index] = parentFromChildren[0].parentFromChildren;
        const updatedPath = pathArr.join(".");
        node.dataPath = updatedPath;
       
        // update a path in element as well for constraint checking
        let idArr = node.element.id!.split(".");
        idArr[parentFromChildren[0].index] = parentFromChildren[0].parentFromChildren;
        const updatedId = idArr.join(".");
        node.element.id = updatedId;
    }
}
