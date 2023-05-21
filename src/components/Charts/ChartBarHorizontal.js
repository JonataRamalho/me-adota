import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBarHorizontal = ({ text, labels, cats, dogs }) => {
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      //   legend: {
      //     position: "right",
      //   },
      title: {
        display: true,
        text: text,
      },
    },
  };
  const catsData = Object.values(cats);
  const dogsData = Object.values(dogs);

  const data = {
    labels,
    datasets: [
      {
        label: "Gato",
        data: catsData,
        backgroundColor: "rgba(51, 203, 252, 0.8)",
      },
      {
        label: "Cachorro",
        data: dogsData,
        backgroundColor: "rgba(53, 53, 53, 0.8)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartBarHorizontal;
