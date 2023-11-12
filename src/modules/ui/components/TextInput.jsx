const TextInput = ({ label, value, onChange, type, placeholder }) => {
  return (
    <div className="flex flex-row p-3">
      <div className="bg-gray-400 rounded-l-md flex justify-center items-center w-[100px] lg:w-[140px]">
        <p className="bg-gray-400 text-center rounded-l-md text-white text-[10px] flex justify-center items-center lg:text-[15px] lg:px-4">{ label } :</p>
      </div>
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="w-full rounded-r-md px-2 placeholder:text-sm"
        placeholder={placeholder || `Enter ${label}`}
      />
    </div>
  );
};

export default TextInput;
