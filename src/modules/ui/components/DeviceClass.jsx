import { useState } from "react";

const DeviceClass = () => {
  const [selectedDeviceClass, setSelectedDeviceClass] = useState("");

  const handleDeviceClassChange = (e) => {
    setSelectedDeviceClass(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">Device Class :</p>
      <select
        value={selectedDeviceClass}
        onChange={handleDeviceClassChange}
        className="w-[22.3vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          Choose Device Class
        </option>
        <option value="High End">High End</option>
        <option value="Medium End">Medium End</option>
        <option value="Low End">Low End</option>
      </select>
    </div>
  );
};

export default DeviceClass;
