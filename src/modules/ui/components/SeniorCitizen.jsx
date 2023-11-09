import { useState } from "react";

const DeviceProtection = () => {
  const [selectedDeviceProtection, setSelectedDeviceProtection] =
    useState("Yes");

  const handleDeviceProtectionChange = (e) => {
    setSelectedDeviceProtection(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">
        DeviceProtection :
      </p>
      <select
        value={selectedDeviceProtection}
        onChange={handleDeviceProtectionChange}
        className="w-[20vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default DeviceProtection;
