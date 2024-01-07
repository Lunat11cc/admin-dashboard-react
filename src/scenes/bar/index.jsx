import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    return (
        <Box m="20px">
            <Header title="Столбчатая диаграмма" subtitle="Диаграмма №1" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    );
};

export default Bar;