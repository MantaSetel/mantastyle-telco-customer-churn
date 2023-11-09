import Dependent from "../components/Dependents";
import Gender from "../components/Gender";
import MultipleLanes from "../components/MultipleLines";
import Partner from "../components/Partner";
import PhoneService from "../components/PhoneService";
import InternetService from "../components/InternetService";
import OnlineSecurity from "../components/OnlineSecurity";
import OnlineBackup from "../components/OnlineBackup";
import DeviceProtection from "../components/DeviceProtection";
import TechSupport from "../components/TechSupport";
import StreamingTV from "../components/StreamingTV";
import StreamingMovie from "../components/StreamingMovie";

const Prediction = () => {
  return (
    <div className="bg-[#0969b5] h-[40vh] w-[185vh] rounded-xl">
      <div className="p-5 grid grid-cols-4">
        <Gender />
        <Partner />
        <Dependent />
        <PhoneService />
        <MultipleLanes />
        <InternetService />
        <OnlineSecurity />
        <OnlineBackup />
        <DeviceProtection />
        <TechSupport />
        <StreamingTV />
        <StreamingMovie />
      </div>
    </div>
  );
};

export default Prediction;
