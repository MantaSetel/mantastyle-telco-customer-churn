import { useState } from "react";

const VideoProduct = () => {
  const [selectedVideoProduct, setSelectedVideoProduct] = useState("");

  const handleVideoProductChange = (e) => {
    setSelectedVideoProduct(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">Video Product :</p>
      <select
        value={selectedVideoProduct}
        onChange={handleVideoProductChange}
        className="w-[20.3vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          Use Video Product?
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="No Internet Service">No Internet Service</option>
      </select>
    </div>
  );
};

export default VideoProduct;
