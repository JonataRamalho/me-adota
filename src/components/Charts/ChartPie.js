import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartPie = ({ text, labels, dataAnimals }) => {
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
    labels: labels,
    datasets: [
      {
        data: dataAnimals,
        backgroundColor: [
          "rgba(53, 53, 53, 0.8)",
          "rgba(51, 203, 252, 0.8)",
          "rgba(211, 141, 95, 0.7)",
          "rgba(164, 169, 164, 0.65)",
          "rgba(244, 211, 160, 0.65)",
        ],
        borderColor: [
          "rgba(53, 53, 53, 0.8)",
          "rgba(51, 203, 252, 0.8)",
          "rgba(211, 141, 95, 0.7)",
          "rgba(164, 169, 164, 0.65)",
          "rgba(244, 211, 160, 0.65)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie options={options} data={data} />;
};

export default ChartPie;
