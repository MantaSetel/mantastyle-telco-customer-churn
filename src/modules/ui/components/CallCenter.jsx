import { useState } from "react";

const OnlineSecurity = () => {
  const [selectedOnlineSecurity, setSelectedOnlineSecurity] = useState("Yes");

  const handleOnlineSecurityChange = (e) => {
    setSelectedOnlineSecurity(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">
        OnlineSecurity :
      </p>
      <select
        value={selectedOnlineSecurity}
        onChange={handleOnlineSecurityChange}
        className="w-[20vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default OnlineSecurity;
