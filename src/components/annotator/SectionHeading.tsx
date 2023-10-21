import { SectionComponentProps } from "@/types";

const SectionComponent = (props: SectionComponentProps) => {
  return (
    <div>
      <h3>{props.section.heading}</h3>
      {props.children}
    </div>
  );
};

export default SectionComponent;
