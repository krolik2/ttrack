import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { selectChartDoughnut } from "../features/chartDoughnut/DoughnutSlice";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};



export function DoughnutChart() {

  const chartDoughnut = useSelector(selectChartDoughnut);

  const labels = ["Production"]
  // chartDoughnut.taski.map((el) => el.label);

   const data = {
    labels,
    datasets: [
      {
        data: chartDoughnut.production,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
  
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} options={options}/>;
}
