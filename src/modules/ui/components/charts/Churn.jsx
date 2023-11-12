import { PieChart } from "@mui/x-charts";
import axios from "axios";
import { API_URL } from "../../../../config/api";
import { useEffect, useState } from "react";

const Churn = () => {
    const [churnCount, setChurnCount] = useState({})

    const getChurnCount = async () => {
        try {
            const response = await axios.get(`${API_URL}/churn`)
            const { data } = response
            console.log(data)
            setChurnCount(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getChurnCount()
    }, [])

    return (
        <div className="flex flex-col bg-[#0969b5]">
            <h3 className="text-white font-semibold text-lg text-center">
                Churn
            </h3>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: churnCount.churnCount, label: "Churn" },
                            { id: 1, value: churnCount.notChurnCount, label: "Not Churn" },
                        ],
                    },
                ]}
                width={350}
                height={200}
            />
        </div>
    );
};

export default Churn;
