const SelectInput = ({ value, onChange, label, options, placeholder }) => {
  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">{ label } :</p>
      <select
        value={value}
        onChange={onChange}
        className="w-[20.3vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        { options && options.map((option) => (
          <option value={option.value}>{ option.label }</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
