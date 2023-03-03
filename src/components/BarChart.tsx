import { useEffect, useState } from "react";
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
import { selectChartBars } from "../features/chartBars/ChartBarsSlice";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

export function BarChart() {
  const chartBars = useSelector(selectChartBars);

  const [chartsData, setChartsData] = useState<{
    labels: string[];
    datasets: Array<{
      data: number[];
      backgroundColor: string[];
      hoverBackgroundColor: string[]
    }>;
  }>({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: []
      },
    ],
  });

  useEffect(() => {
    function handleDataChange() {
      setChartsData({
        labels: chartBars.data.map((el) => el.task),
        datasets: [
          {
            data: chartBars.data.map((el) => el.productivity),
            backgroundColor: chartBars.data.map((el) => el.color),
            hoverBackgroundColor: chartBars.data.map((el) => el.color)
          },
        ],
      });
    }

    handleDataChange();
  }, [chartBars]);


  return <Bar options={options} data={chartsData} redraw={true}/>;
}
