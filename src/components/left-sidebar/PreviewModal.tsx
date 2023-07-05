// import ReactJson from "react-json-view";
import ModalWrapper from "../ModalWrapper";
import { ResourcePathRepr, db } from "@/db/db";
import { getBaseProfile } from "@/db/utils";
import { toastError } from "@/toasts";
import { getResourceTypeFromUrl, isBaseUrl } from "@/utils/utils";
import { useLiveQuery } from "dexie-react-hooks";
import { StructureDefinition } from "fhir/r4";
import dynamic from "next/dynamic";
const ReactJson = dynamic(import('react-json-view'),{ssr:false});
import { AiFillEdit } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";
import { useStore } from "@/stores/useStore";
import { Modes } from "@/utils/constants";




interface PreviewModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    pathRepr: ResourcePathRepr;
  }

export function PreviewModal(props: PreviewModalProps){
    const resource = useLiveQuery(() => db.resources.get(props.pathRepr.id));
    const profiles = useLiveQuery(() => db.profiles.toArray());
    const { setProfileTree, setMode } = useStore((state) => {
        return { setProfileTree: state.setProfileTree, setMode: state.setMode };
      });

    return(
        <ModalWrapper
            setShow={props.setIsOpen}
        >
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
            {resource && (
                <ReactJson
                    src={resource}
                    name={null}
                    displayObjectSize={false}
                    displayDataTypes={false}
                    enableClipboard={false}
                    />
            )}
            </div>
            <div className="text-right">
            <button
                className="w-24 p-2 text-gray-500 rounded-md border-2 hover:scale-105"
                onClick={async () => {
                    let profile: StructureDefinition | undefined;
                    const profileUrl = props.pathRepr.data.find(
                      (data) => data.path === "meta.profile[0]"
                    )?.value;
                    if (profileUrl && isBaseUrl(profileUrl)) {
                      const resourceType = getResourceTypeFromUrl(profileUrl);
                      profile = await getBaseProfile(resourceType);
                    } else if (profileUrl) {
                      profile = profiles?.find(
                        (profile) => profile.url === profileUrl
                      );
                    }
                    if (!profile) {
                      toastError("No profile found for this resource");
                      return;
                    }
                    setProfileTree(profile, props.pathRepr.data);
                    setMode(Modes.EDIT);
                    props.setIsOpen(false);
                  }}
            ><AiFillEdit className="inline"/> Edit</button>
            <button
                className="w-24 p-2 text-gray-500 rounded-md border-2 hover:scale-105"
                onClick={()=> props.setIsOpen(false)}
                ><BsHandThumbsUp className="inline"/> Done</button>
            </div>
        </ModalWrapper>
    )
}