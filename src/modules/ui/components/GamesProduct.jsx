import { useState } from "react";

const GamesProduct = () => {
  const [selectedGamesProduct, setSelectedGamesProduct] = useState("");

  const handleGamesProductChange = (e) => {
    setSelectedGamesProduct(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">Games Product :</p>
      <select
        value={selectedGamesProduct}
        onChange={handleGamesProductChange}
        className="w-[20.3vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          Use Games Product?
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="No Internet Service">No Internet Service</option>
      </select>
    </div>
  );
};

export default GamesProduct;
