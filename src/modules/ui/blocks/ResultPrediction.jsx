import Churn from "../components/Churn";

const ResultPrediction = ({ churn }) => {
    return (
        <div className="bg-[#0969b5] mt-8 py-12">
            <div className="flex text-white flex-col justify-center items-center space-y-4">
                <p className="text-xl leading-0">
                    APAKAH BERPOTENSI CHURN?{" "}
                </p>
                <span className="text-8xl">{churn}</span>
            </div>
        </div>
    );
};

export default ResultPrediction;
