import { useState } from "react";

const MusicProduct = () => {
  const [selectedMusicProduct, setSelectedMusicProduct] = useState("");

  const handleMusicProductChange = (e) => {
    setSelectedMusicProduct(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">Music Product :</p>
      <select
        value={selectedMusicProduct}
        onChange={handleMusicProductChange}
        className="w-[20.3vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          Use Music Product?
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="No Internet Service">No Internet Service</option>
      </select>
    </div>
  );
};

export default MusicProduct;
