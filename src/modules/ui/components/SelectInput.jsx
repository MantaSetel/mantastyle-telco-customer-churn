const SelectInput = ({ value, onChange, label, options, placeholder }) => {
  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 text-center rounded-l-md text-white text-[10px] lg:text-[15px] lg:px-4 lg:py-2 flex justify-center items-center w-[100px] lg:w-[130px]">{ label }</p>
      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-r-md px-2"
      >
        <option value="" disabled hidden className="text-sm">
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
