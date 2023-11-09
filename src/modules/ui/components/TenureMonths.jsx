import { useState } from "react";

const Tenure_Months = () => {
  const [selectedTenure_Months, setSelectedTenure_Months] = useState("Male");

  const handleTenure_MonthsChange = (e) => {
    setSelectedTenure_Months(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <div className="bg-gray-400 p-3 rounded-l-md">
        <p className="text-white">Tenure Months :</p>
      </div>
      <select
        value={selectedTenure_Months}
        onChange={handleTenure_MonthsChange}
        className="w-[26.8vh] rounded-r-md px-2"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default Tenure_Months;
