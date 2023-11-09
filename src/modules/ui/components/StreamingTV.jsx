import { useState } from "react";

const StreamingTV = () => {
  const [selectedStreamingTV, setSelectedStreamingTV] = useState("Yes");

  const handleStreamingTVChange = (e) => {
    setSelectedStreamingTV(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">StreamingTV :</p>
      <select
        value={selectedStreamingTV}
        onChange={handleStreamingTVChange}
        className="w-[21.2vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default StreamingTV;
