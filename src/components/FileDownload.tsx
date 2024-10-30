import React, { useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "config/const";
import DownloadSVG from "elements/DownloadSVG";
import Loading from "./Loading";

interface Props {
  tab: string;
  name: string;
  title: string;
  index: string;
}
const FileDownload: React.FC<Props> = ({ tab, name, title, index }) => {
  const [loading, setLoading] = useState(false);

  const downloadFile = () => {
    setLoading(true);
    fetch(`${baseUrl}/api/download/${name}?tab=${tab}&index=${index}`)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) return response.blob();
        if (response.status === 404) throw new Error("File not found.");
        return response.json().then((errorData) => {
          throw new Error(errorData?.message || response.statusText);
        });
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
      .catch((error) => {
        setLoading(false);
        toast.error(error?.message, { position: "top-right" });
      });
  };

  return (
    <button type="button" onClick={() => downloadFile()} disabled={loading} className="flex items-center gap-2 py-8 px-8 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
      {title} {loading ? <Loading /> : <DownloadSVG />}
    </button>
  );
};

export default FileDownload;
