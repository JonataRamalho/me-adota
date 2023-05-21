import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ChartBar = ({ text, labels, cats, dogs }) => {
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
        label: "Gato",
        data: cats,
        backgroundColor: "rgba(51, 203, 252, 0.8)",
      },
      {
        label: "Cachorro",
        data: dogs,
        backgroundColor: "rgba(53, 53, 53, 0.8)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartBar;
