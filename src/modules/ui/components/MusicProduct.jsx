import { useState } from "react";

const MultipleLanes = () => {
  const [selectedMultipleLanes, setSelectedMultipleLanes] = useState("Yes");

  const handleMultipleLanesChange = (e) => {
    setSelectedMultipleLanes(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">MultipleLanes :</p>
      <select
        value={selectedMultipleLanes}
        onChange={handleMultipleLanesChange}
        className="w-[22.1vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default MultipleLanes;
