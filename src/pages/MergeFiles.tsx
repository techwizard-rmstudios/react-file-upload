import React, { useState } from "react";
import FileUpload from "components/FileUpload";
import FileDownload from "components/FileDownload";
import { dateString } from "config/const";

const MergeFiles: React.FC = () => {
  const [index, setIndex] = useState(1);
  return (
    <div className="dark flex flex-col items-center mt-6">
      <div className="flex items-center gap-x-4 min-w-max">
        <button onClick={() => setIndex(Math.max(index - 1, 1))} className="w-10 h-10 bg-white p-2 font-bold inline-flex items-center justify-center rounded-full transition-all duration-150 hover:bg-indigo-600 hover:text-white">
          -
        </button>
        <button className="w-10 h-10 bg-primary-600 text-white p-2 inline-flex items-center justify-center rounded-full transition-all duration-150 hover:bg-indigo-600 hover:text-white">{index}</button>
        <button onClick={() => setIndex(index + 1)} className="w-10 h-10 bg-white p-2 font-bold inline-flex items-center justify-center rounded-full transition-all duration-150 hover:bg-indigo-600 hover:text-white">
          +
        </button>
      </div>
      <div className="flex flex-col items-center sm:items-start justify-center sm:flex-row sm:flex-wrap gap-8 px-6 py-6 mx-auto">
        {[...Array(index)].map((n, i) => (
          <div key={i} className="min-w-40">
            <FileUpload key={i} name={`0_${i + 1}.xlsx`} />
            <p className="font-bold text-center text-white p-2">File {i + 1} (XLSX)</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-8 px-6 py-6 mx-auto">
        <FileDownload tab="0" name="Merged_File.xlsx" title="Download Merged File XLSX" index="5" />
      </div>
    </div>
  );
};

export default MergeFiles;
