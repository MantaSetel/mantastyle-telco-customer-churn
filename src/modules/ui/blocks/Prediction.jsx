import { useState } from "react";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import PrimaryButton from "../components/PrimaryButton";
import CustomerChurnService from "../../../services/CustomerChurnService";

const Prediction = ({ churn, setChurn, loading, setLoading }) => {
    const [tenureMonths, setTenureMonths] = useState("");
    const [location, setLocation] = useState("");
    const [monthlyPurchase, setMonthlyPurchase] = useState("");
    const [deviceClass, setDeviceClass] = useState("");
    const [gamesProduct, setGamesProduct] = useState("");
    const [musicProduct, setMusicProduct] = useState("");
    const [educationProduct, setEducationProduct] = useState("");
    const [videoProduct, setVideoProduct] = useState("");
    const [callCenter, setCallCenter] = useState("");
    const [useMyApp, setUseMyApp] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [cltv, setCltv] = useState("");
    const [error, setError] = useState(false);

    const deviceClassOptions = [
        { value: "High End", label: "High End" },
        { value: "Medium End", label: "Medium End" },
        { value: "Low End", label: "Low End" },
    ];

    const trueFalseAndNotSetOptions = [
        { value: "Yes", label: "Ya" },
        { value: "No", label: "No" },
        { value: "No internet service", label: "No internet service" },
    ];

    const trueAndFalseOptions = [
        { value: "Yes", label: "Ya" },
        { value: "No", label: "No" },
    ];

    const paymentMethodOptions = [
        { value: "Pulsa", label: "Pulsa" },
        { value: "Credit", label: "Credit" },
        { value: "Debit", label: "Debit" },
        { value: "Digital Wallet", label: "Digital Wallet" },
    ];

    const handlePredict = async () => {
        setLoading(true);
        const result = await CustomerChurnService.predictChurn({
            tenure_months: tenureMonths,
            location: location,
            device_class: deviceClass,
            games_product: gamesProduct,
            music_product: musicProduct,
            education_product: educationProduct,
            video_product: videoProduct,
            call_center: callCenter,
            use_my_app: useMyApp,
            payment_method: paymentMethod,
            monthly_purchase: monthlyPurchase,
            cltv: cltv,
        });

        if (!result.error) {
            setError(false);
            setChurn(result.data);
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            })
        } else {
            setError(true);
        }
        setLoading(false);
    };

    return (
        <div className="bg-[#0969b5] lg:w-full rounded-xl">
            <div className="p-5 grid grid-cols-2 lg:grid-cols-3 max:w-full">
                {error && (
                    <div className="col-span-2 lg:col-span-3">
                        <p className="text-red-400 font-semibold text-center">
                            Something Error
                        </p>
                    </div>
                )}
                <TextInput
                    label="Tenure Months"
                    value={tenureMonths}
                    onChange={(e) => setTenureMonths(e.target.value)}
                />
                <TextInput
                    label="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <SelectInput
                    label="Device Class"
                    options={deviceClassOptions}
                    value={deviceClass}
                    placeholder="Choose Device Class"
                    onChange={(e) => setDeviceClass(e.target.value)}
                />
                <SelectInput
                    label="Games Product"
                    options={trueFalseAndNotSetOptions}
                    value={gamesProduct}
                    placeholder="Use games product?"
                    onChange={(e) => setGamesProduct(e.target.value)}
                />
                <SelectInput
                    label="Music Product"
                    options={trueFalseAndNotSetOptions}
                    value={musicProduct}
                    placeholder="Use music product?"
                    onChange={(e) => setMusicProduct(e.target.value)}
                />
                <SelectInput
                    label="Education Product"
                    options={trueFalseAndNotSetOptions}
                    value={educationProduct}
                    placeholder="Use education product?"
                    onChange={(e) => setEducationProduct(e.target.value)}
                />
                <SelectInput
                    label="Video Product"
                    options={trueFalseAndNotSetOptions}
                    value={videoProduct}
                    placeholder="Use video product?"
                    onChange={(e) => setVideoProduct(e.target.value)}
                />
                <SelectInput
                    label="Call Center"
                    options={trueAndFalseOptions}
                    value={callCenter}
                    placeholder="Often use?"
                    onChange={(e) => setCallCenter(e.target.value)}
                />
                <SelectInput
                    label="Use MyApp"
                    options={trueFalseAndNotSetOptions}
                    value={useMyApp}
                    placeholder="Use MyApp?"
                    onChange={(e) => setUseMyApp(e.target.value)}
                />
                <SelectInput
                    label="Payment Method"
                    options={paymentMethodOptions}
                    value={paymentMethod}
                    placeholder="Choose Payment Options?"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <TextInput
                    label="Monthly Purchase"
                    type="number"
                    placeholder="Enter IDR"
                    value={monthlyPurchase}
                    onChange={(e) => setMonthlyPurchase(e.target.value)}
                />
                <TextInput
                    label="CLTV"
                    type="number"
                    placeholder="Enter IDR"
                    value={cltv}
                    onChange={(e) => setCltv(e.target.value)}
                />
                <div className="p-3 col-span-2 lg:col-span-3">
                    <PrimaryButton loading={loading} onClick={handlePredict} />
                </div>
            </div>
        </div>
    );
};

export default Prediction;
