import { useStore } from "@/stores/useStore";
import Select from "react-select";
import { resourceOptions } from "@/utils/constants";
import { getResourceTypeFromProfile } from "@/utils/utils";
import { OptionType } from "@/types";

interface FocusSelectorProps {
  focusResources: OptionType[];
  setFocusResources: (focusResources: OptionType[]) => void;
}

const FocusSelector = (props: FocusSelectorProps) => {
  const { profile } = useStore((state) => {
    return {
      profile: state.activeProfile,
    };
  });

  return (
    <div className="w-full">
      <Select
        instanceId={"baseprofile-select"}
        className="w-full mx-auto"
        value={
          profile
            ? resourceOptions.find(
                (option) => getResourceTypeFromProfile(profile) === option.value
              )
            : null
        }
        options={resourceOptions}
        placeholder="Select A Focus Resource"
        onChange={async (e) => {
          if (e) {
            if (!props.focusResources.includes(e)) {
              props.setFocusResources([...props.focusResources, e]);
            }
          }
        }}
      ></Select>
    </div>
  );
};

export default FocusSelector;
