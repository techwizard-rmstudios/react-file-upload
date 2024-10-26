import React from "react";
import FileUpload from "components/FileUpload";
import FileDownload from "components/FileDownload";
import { dateString } from "config/const";

const Stage1: React.FC = () => {
  return (
    <div className="dark flex flex-col mt-6">
      <div className="flex flex-col items-center sm:items-start justify-center sm:flex-row gap-8 px-6 py-6 mx-auto">
        <div>
          <FileUpload key="pdf" name="1_T-Mobile.pdf" />
          <p className="font-bold text-center text-white p-2">T-Mobile (PDF)</p>
        </div>
        <div>
          <FileUpload key="csv" name="1_Verizon.csv" />
          <p className="font-bold text-center text-white p-2">Verizon (CSV)</p>
        </div>
        <div>
          <FileUpload key="xlsx" name="1_AT&T Detail Report.xlsx" />
          <p className="font-bold text-center text-white p-2">AT&T Detail Report (XLSX)</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 px-6 py-6 mx-auto">
        <FileDownload name={`Total Taxes ${dateString()}.xlsx`} title="Download Total Taxes XLSX" />
      </div>
    </div>
  );
};

export default Stage1;