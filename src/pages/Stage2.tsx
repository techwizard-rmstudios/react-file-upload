import React from "react";
import FileUpload from "components/FileUpload";
import FileDownload from "components/FileDownload";
import { dateString } from "config/const";

const Stage2: React.FC = () => {
  return (
    <div className="dark flex flex-col mt-6">
      <div className="flex flex-col items-center sm:items-start justify-center sm:flex-row sm:flex-wrap gap-8 px-6 py-6 mx-auto">
        <div>
          <FileUpload key={1} name="2_CallEnquiryV2_Merged.xlsx" />
          <p className="font-bold text-center text-white p-2">Reports billedCallEnquiryV2 (XLSX)</p>
        </div>
        <div>
          <FileUpload key={2} name="2_Zoey Tax Report.xlsx" />
          <p className="font-bold text-center text-white p-2">Zoey Tax Report (XLSX)</p>
        </div>
        <div>
          <FileUpload key={3} name="2_ListOfServices.csv" />
          <p className="font-bold text-center text-white p-2">Reports listOfservices (CSV)</p>
        </div>
        <div>
          <FileUpload key={4} name="2_UnpostedFixedCharges.csv" />
          <p className="font-bold text-center text-white p-2">Reports invoiceRun unpostedIrFixedCharges (CSV)</p>
        </div>
        <div>
          <FileUpload key={5} name="2_Fixed Charges Report.xlsx" />
          <p className="font-bold text-center text-white p-2">Fixed Charges Report (XLSX)</p>
        </div>
        <div>
          <FileUpload key={6} name="2_Ceretax Item Codes.xlsx" />
          <p className="font-bold text-center text-white p-2">Ceretax Item Codes (XLSX)</p>
        </div>
        <div>
          <FileUpload key={7} name="2_Ceretax Address List.xlsx" />
          <p className="font-bold text-center text-white p-2">Ceretax Address List (XLSX)</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 px-6 py-6 mx-auto">
        <FileDownload tab="2" name={`Ceretax Upload ${dateString()}.xlsx`} title="Download Ceretax Upload XLSX" index="1" />
      </div>
    </div>
  );
};

export default Stage2;
