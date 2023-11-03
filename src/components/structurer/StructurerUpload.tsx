import { toastError } from "@/toasts";
import { StructurerUploadProps, TextExtractionApiEndpoints } from "@/types";
import { fi } from "date-fns/locale";
import { useRef, useState } from "react";
import { GrDocumentPdf, GrScan } from "react-icons/gr";
import { TiUpload } from "react-icons/ti";

const StructurerUpload = (props: StructurerUploadProps) => {
  const { setText } = props;

  const [textExtractionLoading, setTextExtractionLoading] = useState(false);

  const pdfInputRef = useRef<HTMLInputElement>(null);
  const scanInputRef = useRef<HTMLInputElement>(null);

  const handlePdfExtractClick = () => {
    setTextExtractionLoading(true);
    pdfInputRef.current?.click();
  };

  const handleScanExtractClick = () => {
    setTextExtractionLoading(true);
    scanInputRef.current?.click();
  };

  const correctFileType = (
    file: File,
    apiEndpoint: TextExtractionApiEndpoints
  ): boolean => {
    if (apiEndpoint === TextExtractionApiEndpoints.extractPDFText) {
      return file.type === "application/pdf";
    } else if (apiEndpoint === TextExtractionApiEndpoints.extractScanText) {
      return file.type === "image/png" || file.type === "image/jpeg";
    } else return false;
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    apiEndpoint: TextExtractionApiEndpoints
  ) => {
    const file = e.target.files?.[0];
    if (file && correctFileType(file, apiEndpoint)) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch(
          `http://localhost:8000/textInput/${apiEndpoint}/`,
          {
            method: "POST",
            body: formData,
            mode: "cors",
          }
        );
        if (!response.ok) {
          throw new Error("Error extracting text");
        }
        const data = await response.json();
        if (data.text) {
          setText(data.text);
        } else {
          throw new Error("Error extracting text");
        }
      } catch (error) {
        toastError(error.message);
      } finally {
        setTextExtractionLoading(false);
      }
      if (e.target.files) {
        e.target.value = "";
      }
    } else {
      toastError("Invalid file type");
    }
  };

  return (
    <div className="flex flex-row gap-2 m-2">
      <input
        type="file"
        name="pdfupload"
        id=""
        className="hidden"
        onChange={(e) => {
          handleFileChange(e, TextExtractionApiEndpoints.extractPDFText);
        }}
        ref={pdfInputRef}
      />
      <button
        className="bg-blue-500 rounded-md flex flex-row gap-1 items-center p-1 transform hover:scale-105"
        onClick={() => handlePdfExtractClick()}
      >
        <GrDocumentPdf size={20} />
        Extract Text from PDF
        <TiUpload size={20} />
      </button>
      <input
        type="file"
        name="scanupload"
        id=""
        className="hidden"
        ref={scanInputRef}
        onChange={(e) => {
          handleFileChange(e, TextExtractionApiEndpoints.extractScanText);
        }}
      />
      <button
        className="bg-blue-500 rounded-md flex flex-row gap-1 items-center p-1 transform hover:scale-105"
        onClick={() => handleScanExtractClick()}
      >
        <GrScan size={20} />
        Extract Text from Scan
        <TiUpload size={20} />
      </button>
    </div>
  );
};

export default StructurerUpload;
