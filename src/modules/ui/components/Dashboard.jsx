import { BarChart, PieChart, ScatterChart } from "@mui/x-charts";
import DeviceClass from "./charts/DeviceClass";
import ChurnCharts from "./charts/Churn";
import MonthlyPurchasePerDevice from "./charts/MonthlyPurchasePerDevice";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 gap-4 max-w-full overflow-hidden">
            <div className="mb-4">
                <DeviceClass />
            </div>
            <div className="mb-4">
                <ChurnCharts />
            </div>
            <div className="mb-4">
                <MonthlyPurchasePerDevice />
            </div>
        </div>
    );
};

export default Dashboard;

