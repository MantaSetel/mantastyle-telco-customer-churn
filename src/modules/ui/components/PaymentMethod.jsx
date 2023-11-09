import { useState } from "react";

const TechSupport = () => {
  const [selectedTechSupport, setSelectedTechSupport] = useState("Yes");

  const handleTechSupportChange = (e) => {
    setSelectedTechSupport(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">TechSupport :</p>
      <select
        value={selectedTechSupport}
        onChange={handleTechSupportChange}
        className="w-[21.7vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default TechSupport;
