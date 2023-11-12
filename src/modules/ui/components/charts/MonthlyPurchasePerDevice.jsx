import { BarChart } from "@mui/x-charts";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../../config/api";

const MonthlyPurchasePerDevice = () => {
    const [monthlyPurchases, setMonthlyPurchases] = useState([0,0,0])

    const getMonthlyPurchases = async () => {
        try {
            const response = await axios.get(`${API_URL}/monthly-purchase-per-device`)
            const { data } = response
            setMonthlyPurchases([data.data.highEndMonthlyPurchase, data.data.midEndMonthlyPurchase, data.data.lowEndMonthlyPurchase])
        } catch(error)  {
            console.log(error);
        }
    }

    useEffect(() => {
        getMonthlyPurchases()
    })

    return (
        <div className="flex flex-col bg-[#0969b5]">
            <h3 className="text-white font-semibold text-lg text-center">
                Monthly Purchase per Device
            </h3>
            <BarChart
                color="#9001cb"
                sx={{
                    "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                        strokeWidth: 0.8,
                    },
                    "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                        strokeWidth: 0.8,
                    },
                }}
                xAxis={[
                    {
                        id: "barCategories",
                        data: ["High End", "Mid End", "Low End"],
                        scaleType: "band",
                    },
                ]}
                series={[
                    {
                        data: monthlyPurchases,
                    },
                ]}
                width={400}
                height={300}
            />
        </div>
    );
};

export default MonthlyPurchasePerDevice;
