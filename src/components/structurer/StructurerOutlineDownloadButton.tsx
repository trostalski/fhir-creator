import { StructurerOutlineDownloadButtonProps } from "@/types";
import { downloadOutlinePart } from "@/utils/structurerUtils";
import { TiDownload } from "react-icons/ti";

const StructurerOutlineDownloadButton = (
  props: StructurerOutlineDownloadButtonProps
) => {
  const { outlinePart } = props;
  return (
    <div className="rounded-md p-1 transform hover:scale-110 hover:bg-gray-700">
      <TiDownload onClick={() => downloadOutlinePart(outlinePart)} />
    </div>
  );
};

export default StructurerOutlineDownloadButton;
