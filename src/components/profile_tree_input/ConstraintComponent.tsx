import { useValResultStore } from "@/stores/useStore";
import { ProfileTreeNode } from "@/utils/buildTree";
import { GUIConstraintResolver } from "@/utils/constraint_utils";
import { ElementDefinitionConstraint } from "fhir/r4";

export interface WarningComponentProps{
    resolver?: GUIConstraintResolver
}

function renderConstraints(constraints:ElementDefinitionConstraint[]){
    if(constraints){
        const severity = constraints[0].severity
        return(
            <div className={`rounded ${
                severity === "warning"
                ?"bg-orange-400"
                : severity === "error"
                ? "bg-pink-400"
                : severity === "guideline"
                ? "bg-orange-500"
                : ""
            }`}>
                <h2>Constraint {severity.toUpperCase()}S</h2>
            {
            constraints.map(constraint=>{
                return(
                    <span className="text-white-500 text-xs" key={constraint.key}><b>Expression:</b> {constraint.expression}  <b>Explanation:</b> {constraint.human}</span>
                    )
                })}
            </div>
        )
    }
}



export function ConstraintComponent(props: WarningComponentProps){  
    if(props.resolver){
          const warnings = props.resolver.getWarnings()!;
          const errors = props.resolver.getErrors()!;
          const guidelines = props.resolver.getGuidelines()!;
          return(
            <div>
                {renderConstraints(warnings)}
                {renderConstraints(errors)}
                {renderConstraints(guidelines)}
            </div>
          )
      }
}