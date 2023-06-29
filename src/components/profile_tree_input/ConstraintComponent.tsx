import { useValResultStore } from "@/stores/useStore";
import { ProfileTreeNode } from "@/utils/buildTree";
import { GUIConstraintResolver } from "@/utils/constraint_utils";
import { ElementDefinitionConstraint } from "fhir/r4";

export interface WarningComponentProps{
    node: ProfileTreeNode
}

function renderConstraints(constraints:ElementDefinitionConstraint[]){
    if(constraints){
        const severity = constraints[0].severity
        return(
            <div>
                <h2>Constraint {severity.toUpperCase()}S</h2>
            {
            constraints.map(constraint=>{
                return(
                    <span className="text-gray-500 text-xs" key={constraint.key}><b>Expression:</b> {constraint.expression}  <b>Explanation:</b> {constraint.human}</span>
                    )
                })}
            </div>
        )
    }
}



export function ConstraintComponent(props: WarningComponentProps){
    const { orderedConstraintResults } = useValResultStore((set) =>{
        return{
          orderedConstraintResults: set.orderedConstraintResults
        };
      })
      let guiConstraintResolver;
      if(orderedConstraintResults){
        guiConstraintResolver = new GUIConstraintResolver({node: props.node, orderedConstraintResults});
      }
      if(guiConstraintResolver){
          const warnings = guiConstraintResolver.getWarnings()!;
          const errors = guiConstraintResolver.getErrors()!;
          const guidelines = guiConstraintResolver.getGuidelines()!;
          return(
            <div>
                {renderConstraints(warnings)}
                {renderConstraints(errors)}
                {renderConstraints(guidelines)}
            </div>
          )
      }
}