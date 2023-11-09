import { useState } from "react";

const MonthlyPurchase = () => {
  const [MonthlyPurchase, setMonthlyPurchase] = useState("");

  const handleMonthlyPurchaseChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    setMonthlyPurchase(inputValue);
  };

  return (
    <div className="flex flex-row p-3">
      <div className="bg-gray-400 p-3 rounded-l-md">
        <p className="text-white">Tenure Months :</p>
      </div>
      <input
        type="text"
        value={MonthlyPurchase}
        onChange={handleMonthlyPurchaseChange}
        className="w-[26.8vh] rounded-r-md px-2"
        placeholder="Enter IDR"
      />
    </div>
  );
};

export default MonthlyPurchase;
