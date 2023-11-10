const TextInput = ({ label, value, onChange, type, placeholder }) => {
  return (
    <div className="flex flex-row p-3">
      <div className="bg-gray-400 p-3 rounded-l-md flex justify-center items-center">
        <p className="text-white text-sm">{ label } :</p>
      </div>
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="w-[10rem] rounded-r-md px-2"
        placeholder={placeholder || `Enter ${label}`}
      />
    </div>
  );
};

export default TextInput;
