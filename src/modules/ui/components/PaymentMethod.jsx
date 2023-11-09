import { useState } from "react";

const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="flex flex-row p-3">
      <p className="bg-gray-400 p-3 rounded-l-md text-white">
        Payment Method :
      </p>
      <select
        value={selectedPaymentMethod}
        onChange={handlePaymentMethodChange}
        className="w-[20.3vh] rounded-r-md px-2"
      >
        <option value="" disabled hidden>
          Choose Your Payment
        </option>
        <option value="Pulsa">Pulsa</option>
        <option value="Credit">Credit</option>
        <option value="Debit">Debit</option>
        <option value="Digital Wallet">Digital Wallet</option>
      </select>
    </div>
  );
};

export default PaymentMethod;
