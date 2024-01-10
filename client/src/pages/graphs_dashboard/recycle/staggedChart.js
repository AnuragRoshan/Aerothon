import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  plugins: {
    title: {
      display: true,
      text: "Stacked graph of Overall Recycle requests",
    },
  },
  scales: {
    y: {
      min: 40,
      max: 100,
      ticks: {
        stepSize: 1,
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const StaggedChartRecycle = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    const fetchData = () => {
      const url = "https://jsonplaceholder.typicode.com/comments";
      const dataset1 = [10,5, 8, 7, 4, 16];//recycled
      const dataset2 = [3, 9, 8, 15, 10];//nonrecycled

      const lableset = [
        "Avionics",
        "Engine",
        "Fuselage",
        "Landing Gear",
        "Wings",
      ];
      fetch(url)
        .then((data) => {
          console.log("API data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("res", res);

          setData({
            labels: lableset,
            datasets: [
              {
                label: "Under-process",
                data: dataset1,
                borderColor: "rgba(54,162,235)",
                backgroundColor: "rgba(54,162,235, 0.5)",
              },
              {
                label: "Recycled successfully",
                data: dataset2,
                borderColor: " rgc(60, 179, 113)",
                backgroundColor: "rgb(60, 179, 113, 0.5)",
              },
            ],
          });
        })
        .catch((err) => {
          console.log("error");
        });
    };
    fetchData();
  }, []);
  return <Bar data={data} options={options} />;
};

export default StaggedChartRecycle;
