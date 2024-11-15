import React, { useState } from "react";
import Logo from "assets/logo.png";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import { activeTab, inactiveTab } from "config/const";
import MergeFiles from "./MergeFiles";

const Home: React.FC = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="dark">
      <div className="bg-gray-50 dark:bg-zinc-900 min-h-screen p-5">
        {/* <div className="flex flex-col items-center mx-auto">
          <a href="https://globaltelecomnetworks.com" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="h-28 mr-2 invert dark:invert-0" src={Logo} alt="logo" />
          </a>
        </div> */}
        <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2">
            <button onClick={() => setTab(1)} className={tab === 1 ? activeTab.link : inactiveTab.link}>
              Stage 1
            </button>
          </li>
          <li className="me-2">
            <button onClick={() => setTab(2)} className={tab === 2 ? activeTab.link : inactiveTab.link}>
              Stage 2
            </button>
          </li>
          {/* <li className="me-2">
            <button onClick={() => setTab(3)} className={tab === 3 ? activeTab.link : inactiveTab.link}>
              Stage 3
            </button>
          </li> */}
          <li className="me-2">
            <button onClick={() => setTab(0)} className={tab === 0 ? activeTab.link : inactiveTab.link}>
              Merge Files
            </button>
          </li>
        </ul>
        {tab === 1 && <Stage1 />}
        {tab === 2 && <Stage2 />}
        {tab === 3 && <Stage3 />}
        {tab === 0 && <MergeFiles />}
      </div>
    </div>
  );
};

export default Home;
