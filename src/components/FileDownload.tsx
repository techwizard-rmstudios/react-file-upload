import React from "react";
import { toast } from "react-toastify";
import { baseUrl } from "config/const";
import DownloadSVG from "elements/DownloadSVG";

interface Props {
  name: string;
}
const FileDownload: React.FC<Props> = ({ name }) => {
  const downloadFile = () => {
    fetch(`${baseUrl}/api/download/${name}`)
      .then((response) => {
        if (response.status === 200) return response.blob();
        else throw new Error("Failed to download file.");
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => toast.error(error?.message, { position: "top-right" }));
  };

  return (
    <button type="button" onClick={() => downloadFile()} className="flex items-center gap-2 py-8 px-16 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
      Download Output XLSX
      <DownloadSVG />
    </button>
  );
};

export default FileDownload;
