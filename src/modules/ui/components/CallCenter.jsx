import { useState } from "react";

const CallCenter = () => {
  const [selectedCallCenter, setSelectedCallCenter] = useState("");

  const handleCallCenterChange = (e) => {
    setSelectedCallCenter(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">Call Center :</p>
      <select
        value={selectedCallCenter}
        onChange={handleCallCenterChange}
        className="w-[20.3vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          Often Use Call Center?
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default CallCenter;
