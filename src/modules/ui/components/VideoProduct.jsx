import { useState } from "react";

const OnlineBackup = () => {
  const [selectedOnlineBackup, setSelectedOnlineBackup] = useState("Yes");

  const handleOnlineBackupChange = (e) => {
    setSelectedOnlineBackup(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">OnlineBackup :</p>
      <select
        value={selectedOnlineBackup}
        onChange={handleOnlineBackupChange}
        className="w-[20vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default OnlineBackup;
