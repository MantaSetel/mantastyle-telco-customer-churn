import { BarChart } from "@mui/x-charts";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../../config/api";

const DeviceClass = () => {
    const [data, setData] = useState([0,0,0])

    const getDeviceClassData = async () => {
        try {
            const response = await axios.get(`${API_URL}/device-class`);
            const { data } = response
            setData([data.data.highEndCount, data.data.midEndCount, data.data.lowEndCount])
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => {
        getDeviceClassData()
    }, [])

    return (
        <div className="flex flex-col bg-[#0969b5]">
            <h3 className="text-white font-semibold text-lg text-center">
                Device Class
            </h3>
            <BarChart
                sx={{
                    "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                        color: "red",
                    },
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
                        data: data,
                    },
                ]}
                width={400}
                height={300}
            />
        </div>
    );
};

export default DeviceClass;
