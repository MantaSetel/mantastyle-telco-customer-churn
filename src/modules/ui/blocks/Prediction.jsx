import { useState } from "react";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import PrimaryButton from "../components/PrimaryButton";

const Prediction = () => {
  const [tenureMonths, setTenureMonths] = useState("")
  const [location, setLocation] = useState("")
  const [monthlyPurchase, setMonthlyPurchase] = useState("")
  const [deviceClass, setDeviceClass] = useState("")
  const [gamesProduct, setGamesProduct] = useState("")
  const [musicProduct, setMusicProduct] = useState("")
  const [educationProduct, setEducationProduct] = useState("")
  const [videoProduct, setVideoProduct] = useState("")
  const [callCenter, setCallCenter] = useState("")
  const [useMyApp, setUseMyApp] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const deviceClassOptions = [
    { value: 'High End', label: 'High End' },
    { value: 'Medium End', label: 'Medium End' },
    { value: 'Low End', label: 'Low End' },
  ]

  const trueFalseAndNotSetOptions = [
    { value: 'true', label: 'Ya' },
    { value: 'false', label: 'No' },
    { value: 'No internet service', label: 'No internet service' },
  ]

  const trueAndFalseOptions = [
    { value: 'true', label: 'Ya' },
    { value: 'false', label: 'No' },
  ]

  const paymentMethodOptions = [
    { value: "Pulsa", label: "Pulsa" },
    { value: "Credit", label: "Credit" },
    { value: "Debit", label: "Debit" },
    { value: "Digital Wallet", label: "Digital Wallet" },
  ]

  return (
    <div className="bg-[#0969b5] lg:w-full rounded-xl">
      <div className="p-5 grid grid-cols-2 lg:grid-cols-3 max:w-full">
        <TextInput label="Tenure Months" value={tenureMonths} onChange={(e) => setTenureMonths(e.target.value)} />
        <TextInput label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <SelectInput label="Device Class" options={deviceClassOptions} value={deviceClass} placeholder="Choose Device Class" onChange={(e) => setDeviceClass(e.target.value)} />
        <SelectInput label="Games Product" options={trueFalseAndNotSetOptions} value={gamesProduct} placeholder="Use games product?" onChange={(e) => setGamesProduct(e.target.value)} />
        <SelectInput label="Music Product" options={trueFalseAndNotSetOptions} value={musicProduct} placeholder="Use music product?" onChange={(e) => setMusicProduct(e.target.value)} />
        <SelectInput label="Education Product" options={trueFalseAndNotSetOptions} value={educationProduct} placeholder="Use education product?" onChange={(e) => setEducationProduct(e.target.value)} />
        <SelectInput label="Video Product" options={trueFalseAndNotSetOptions} value={videoProduct} placeholder="Use video product?" onChange={(e) => setVideoProduct(e.target.value)} />
        <SelectInput label="Call Center" options={trueAndFalseOptions} value={callCenter} placeholder="Often use?" onChange={(e) => setCallCenter(e.target.value)} />
        <SelectInput label="Use MyApp" options={trueFalseAndNotSetOptions} value={useMyApp} placeholder="Use MyApp?" onChange={(e) => setUseMyApp(e.target.value)} />
        <SelectInput label="Payment Method" options={paymentMethodOptions} value={paymentMethod} placeholder="Choose Payment Options?" onChange={(e) => setPaymentMethod(e.target.value)} />
        <TextInput label="MOnthly Purchase" type="number" placeholder="Enter IDR" value={monthlyPurchase} onChange={(e) => setMonthlyPurchase(e.target.value)} />
        <div className="p-3">
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};

export default Prediction;
