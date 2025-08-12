import type { FC } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "./Graphs.css";

const Graphs: FC = () => (
  <>
    <h1>Graphs</h1>
    <h2>Energy production today</h2>
    <div className="barchartToday">
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
    </div>
  </>
);

export default Graphs;
