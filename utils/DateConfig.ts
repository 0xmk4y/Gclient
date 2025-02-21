import { ChartData } from "chart.js";

const datasets: ChartData<"bar", { key: string; value: number }[]> = {
  datasets: [
    {
      data: [
        { key: "Sales", value: 20 },
        { key: "Revenue", value: 10 },
      ],
      parsing: {
        xAxisKey: "key",
        yAxisKey: "value",
      },
    },
  ],
};

const cfg = {
  type: "bar",
  data: {
    datasets: datasets,
    labels: ["a", "b"],
  },
};

