import TenureMonths from "../components/TenureMonths";
import Location from "../components/Location";
import DeviceClass from "../components/DeviceClass";
import GamesProduct from "../components/GamesProduct";
import MusicProduct from "../components/MusicProduct";
import EducationProduct from "../components/EducationProduct";
import CallCenter from "../components/CallCenter";
import VideoProduct from "../components/VideoProduct";
import UseMayApp from "../components/UseMyApp";
import PaymentMethod from "../components/PaymentMethod";
import MonthlyPurchase from "../components/MonthlyPurchase";
import PrimaryButton from "../components/PrimaryButton";

const Prediction = () => {
  return (
    <div className="bg-[#0969b5] h-[25vh] w-[185vh] rounded-xl">
      <div className="p-5 grid grid-cols-4">
        <TenureMonths />
        <Location />
        <DeviceClass />
        <GamesProduct />
        <MusicProduct />
        <EducationProduct />
        <CallCenter />
        <VideoProduct />
        <UseMayApp />
        <PaymentMethod />
        <MonthlyPurchase />
      </div>
    </div>
  );
};

export default Prediction;
