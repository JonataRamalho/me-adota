import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const ChartAreaLine = ({ text, labels, info }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: text,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Despesas",
        data: info,
        borderColor: "rgba(51, 203, 252, 0.8)",
        backgroundColor: "rgba(51, 203, 252, 0.8)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default ChartAreaLine;
