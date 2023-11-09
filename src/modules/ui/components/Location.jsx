import { useState } from "react";

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  const handleLocationChange = (e) => {
    const selectedValue = e.target.value;

    setSelectedLocation(selectedValue);

    switch (selectedValue) {
      case "Jakarta":
        setLongitude(106.81667);
        setLatitude(-6.2);
        break;
      case "Bandung":
        setLongitude(107, 60981);
        setLatitude(-6, 91474);
        break;
      default:
        setLongitude(null);
        setLatitude(null);
        break;
    }
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">Location :</p>
      <select
        value={selectedLocation}
        onChange={handleLocationChange}
        className="w-[25.4vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          Choose Location
        </option>
        <option value="Jakarta">Jakarta</option>
        <option value="Bandung">Bandung</option>
      </select>
    </div>
  );
};

export default Location;
