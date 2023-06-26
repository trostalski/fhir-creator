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
        console.log("constraint tree");
        console.log(this.constraintTree);
    }

    // So plan first of all: from the profile tree create a subset. This subset
    // contains all the leaf nodes with values as well as all their parent nodes

    createConstraintTree(){
        // apparently the profileTree does not contain the root node...
        let firstChildren: ProfileTreeNode[];
        firstChildren = this.getFirstChildren();
        firstChildren.forEach(this.flagNodesAndBuildTree, this);
    }


    // recursive method to parse profileTree for constraintTree construction
    // a node is to be included if a descendant is primitive with value
    flagNodesAndBuildTree(node:ProfileTreeNode): boolean{
        let includeParent = false;
        let childrenResponses: boolean[] = [];

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
        if(includeParent || childrenResponses.includes(true)){
            this.constraintTree.push(node);
            includeParent = true;
        }
        return includeParent;
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

    handleChoiceType(node:ProfileTreeNode, firstChildren: ProfileTreeNode[]){
        // might actually be too early to handle it here already
    }
}