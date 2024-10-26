import React, { useState, DragEvent } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import FileSVG from "elements/FileSVG";
import UploadSVG from "elements/UploadSVG";
import { baseUrl } from "config/const";

interface Props {
  name: string;
}
const FileUpload: React.FC<Props> = ({ name }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const getFileExtension = (filename: string) => {
    return filename.slice(filename.lastIndexOf(".")).toLowerCase();
  };

  const uploadFile = (file: File) => {
    if (getFileExtension(name) !== getFileExtension(file.name)) {
      toast.error("Please upload correct file.", { position: "top-right" });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${baseUrl}/api/upload/${name}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        setFileName(file.name);
      })
      .catch((error) => {
        if (error?.response) toast.error(error.response.data.message, { position: "top-right" });
        else toast.error(error.message, { position: "top-right" });
      });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-1 border-2 border-dashed border-gray-300 rounded-2xl" onDragOver={handleDragOver} onDrop={handleDrop}>
        <label htmlFor={name} className="flex flex-col items-center justify-center py-3 px-3 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50">
          <div className="mb-3 flex items-center justify-center">{fileName ? <FileSVG /> : <UploadSVG />}</div>
          <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">{fileName ? fileName : "Drag and Drop your file here"}</h4>
          <input id={name} type="file" className="hidden" onChange={handleFileChange} multiple />
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
