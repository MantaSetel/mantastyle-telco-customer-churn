import { useState } from "react";
import Prediction from "../blocks/Prediction";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Prediction");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col items-center py-5">
      <div className="btn-group flex">
        <button
          onClick={() => handleTabClick("Prediction")}
          className={`${
            activeTab === "Prediction"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-l-md focus:outline-none`}
        >
          Prediction
        </button>
        <button
          onClick={() => handleTabClick("Data Analysis")}
          className={`${
            activeTab === "Data Analysis"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } px-4 py-2 rounded-r-md focus:outline-none`}
        >
          Data Analysis
        </button>
      </div>
      <div className="mt-4">
        {activeTab === "Prediction" && (
          <div>
            <Prediction />
          </div>
        )}
        {activeTab === "Data Analysis" && (
          <div>Content for Data Analysis Tab</div>
        )}
      </div>
    </div>
  );
};

export default Tab;
