import { useState } from "react";

const EducationProduct = () => {
  const [selectedEducationProduct, setSelectedEducationProduct] = useState("");

  const handleEducationProductChange = (e) => {
    setSelectedEducationProduct(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">
        Education Product :
      </p>
      <select
        value={selectedEducationProduct}
        onChange={handleEducationProductChange}
        className="w-[20.3vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          Use Education Product?
        </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="No Internet Service">No Internet Service</option>
      </select>
    </div>
  );
};

export default EducationProduct;
