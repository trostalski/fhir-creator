import fhirpath from "fhirpath";
import { ProfileTree, ProfileTreeNode } from "./buildTree";
import { ConstraintItem } from "@/types";



// gonna first implement some stuff with functions before putting it all in a class I guess
export class ConstraintResolver {
    private profileTree: ProfileTree;
    private constraintTree : ProfileTreeNode[];

    constructor(profileTree:ProfileTree){
        this.profileTree = profileTree;
        this.constraintTree = [];
        this.createConstraintTree();
        // DEVELOP
        console.log("constraint tree");
        console.log(this.constraintTree);
        // DEVELOP

        this.handleChoiceType();
    }

    // So plan first of all: from the profile tree create a subset. This subset
    // contains all the leaf nodes with values as well as all their parent nodes

    createConstraintTree(){
        // apparently the profileTree does not contain the root node...
        let firstChildren: ProfileTreeNode[];
        firstChildren = this.getFirstChildren();
        firstChildren.forEach(this.flagNodesAndBuildTree, this);
        this.handleChoiceType();
    }


    // recursive method to parse profileTree for constraintTree construction
    // a node is to be included if a descendant is primitive with value
    flagNodesAndBuildTree(node:ProfileTreeNode): {selfPath:string, includeParent:boolean}{
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

    updateChildPaths(node: ProfileTreeNode, childrenResponses: {selfPath:string, includeParent:boolean}[]){
        // update the childPaths of the node
        let newChildPaths: string[] = [];
        childrenResponses.forEach(response => {
            if(response.includeParent){
                newChildPaths.push(response.selfPath);
            }
        });
        node.childPaths = newChildPaths;
    }

    getChildNodeFromPath(childPath: string){
        const childNode = this.profileTree.find(node => node.dataPath === childPath);
        return childNode;
    }

    getFirstChildren(){
        let firstChildren: ProfileTreeNode[] = [];
        this.profileTree.forEach((node)=>{
            // find nodes one level below the root node
            if(node.dataPath.split(".").length == 2){
                firstChildren.push(node);
            }
        })
        return firstChildren;
    }

    handleChoiceType(){
        // find all choice nodes
        const choiceNodes = this.constraintTree.filter(node =>{
            return node.dataPath.includes("[x]");
        })
        
        // need to get index of choice in path

        // resolve Choice from children
        choiceNodes.forEach(node => {
            let parentFromChildren = [];
            for(let i=0; i< node.childPaths.length; i++){
                
            }
            console.log("Choice nodes");
            console.log(choiceNodes);
            console.log("parent from children");
            console.log(parentFromChildren);
            console.log("Parent from Children");
            console.log(parentFromChildren);
        });
        
    }
}