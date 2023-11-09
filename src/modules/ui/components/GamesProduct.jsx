import { useState } from "react";

const PhoneService = () => {
  const [selectedPhoneService, setSelectedPhoneService] = useState("Yes");

  const handlePhoneServiceChange = (e) => {
    setSelectedPhoneService(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">PhoneService :</p>
      <select
        value={selectedPhoneService}
        onChange={handlePhoneServiceChange}
        className="w-[20.3vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default PhoneService;
