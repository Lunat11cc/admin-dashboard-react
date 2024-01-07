import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Круговая диаграмма" subtitle="Диаграмма №2" />
            <Box height="65vh">
                <PieChart />
            </Box>
        </Box>
    );
};

export default Pie;