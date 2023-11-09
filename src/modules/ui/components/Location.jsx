import { useState } from "react";

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState("Yes");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">Location :</p>
      <select
        value={selectedLocation}
        onChange={handleLocationChange}
        className="w-[25.4vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default Location;
