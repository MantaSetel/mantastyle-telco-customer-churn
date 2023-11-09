import { useState } from "react";

const InternetService = () => {
  const [selectedInternetService, setSelectedInternetService] =
    useState("Fiber-Optic");

  const handleInternetServiceChange = (e) => {
    setSelectedInternetService(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <div className="bg-gray-400 p-3 rounded-l-md">
        <p className="text-white">InternetService :</p>
      </div>
      <select
        value={selectedInternetService}
        onChange={handleInternetServiceChange}
        className="w-[20vh] rounded-r-md px-2"
      >
        <option value="Fiber-Optic">Fiber Optic</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default InternetService;
