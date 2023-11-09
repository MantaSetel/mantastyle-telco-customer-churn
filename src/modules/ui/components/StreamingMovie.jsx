import { useState } from "react";

const StreamingMovie = () => {
  const [selectedStreamingMovie, setSelectedStreamingMovie] = useState("Yes");

  const handleStreamingMovieChange = (e) => {
    setSelectedStreamingMovie(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">
        StreamingMovie :
      </p>
      <select
        value={selectedStreamingMovie}
        onChange={handleStreamingMovieChange}
        className="w-[18.2vh] rounded-r-md px-2"
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default StreamingMovie;
