import { SectionComponentProps } from "@/types";

const SectionComponent = (props: SectionComponentProps) => {
  return (
    <div>
      <h3 className="bg-blue-400 text-white rounded-md my-1">
        {props.section.heading}
      </h3>
      {props.children}
    </div>
  );
};

export default SectionComponent;
