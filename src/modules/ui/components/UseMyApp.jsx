import { useState } from "react";

const UseMayApp = () => {
  const [selectedUseMayApp, setSelectedUseMayApp] = useState("");

  const handleUseMayAppChange = (e) => {
    setSelectedUseMayApp(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">My App :</p>
      <select
        value={selectedUseMayApp}
        onChange={handleUseMayAppChange}
        className="w-[20.3vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          Use MyApp?
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="No Internet Service">No Internet Service</option>
      </select>
    </div>
  );
};

export default UseMayApp;
