import React from "react";
import FileUpload from "components/FileUpload";
import FileDownload from "components/FileDownload";
import Logo from "assets/logo.png";

const Home: React.FC = () => {
  return (
    <div className="dark">
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-5">
        <div className="flex flex-col items-center px-6 py-6 mx-auto">
          <a href="https://globaltelecomnetworks.com" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="mr-2 invert dark:invert-0" src={Logo} alt="logo" />
          </a>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 px-6 py-6 mx-auto">
          <div>
            <FileUpload key="pdf" name="1.pdf" />
            <p className="font-bold text-center text-white p-2">T-Mobile (PDF)</p>
          </div>
          <div>
            <FileUpload key="csv" name="2.csv" />
            <p className="font-bold text-center text-white p-2">Verizon (CSV)</p>
          </div>
          <div>
            <FileUpload key="xlsx" name="3.xlsx" />
            <p className="font-bold text-center text-white p-2">AT&T Detail Report (XLSX)</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 px-6 py-6 mx-auto">
          <FileDownload name="output.xlsx" />
        </div>
      </div>
    </div>
  );
};

export default Home;
