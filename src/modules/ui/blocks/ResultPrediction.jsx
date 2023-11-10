import Churn from "../components/Churn";
import PrimaryButton from "../components/PrimaryButton";

const ResultPrediction = () => {
  return (
    <div className="bg-[#0969b5] h-[15vh] w-[185vh] rounded-xl mt-3">
      <div className="flex flex-row justify-between">
        <Churn />
      </div>
    </div>
  );
};

export default ResultPrediction;
