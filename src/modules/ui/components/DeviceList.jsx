import { useState } from "react";

const Dependent = () => {
  const [selectedDependent, setSelectedDependent] = useState("Yes");

  const handleDependentChange = (e) => {
    setSelectedDependent(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">Dependent :</p>
      <select
        value={selectedDependent}
        onChange={handleDependentChange}
        className="w-[22.3vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default Dependent;
