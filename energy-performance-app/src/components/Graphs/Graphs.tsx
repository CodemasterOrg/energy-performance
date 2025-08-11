import type { FC } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Graphs: FC = () => (
  <>
    <h1>Graphs</h1>;<h2>Energy production today</h2>
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["Solar", "Wind", "Water"],
        },
      ]}
      series={[
        {
          data: [2, 5, 3],
        },
      ]}
      height={300}
    />
  </>
);

export default Graphs;
