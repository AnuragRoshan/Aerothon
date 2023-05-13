import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      min: 40,
      max: 100,
      ticks: {
        stepSize: 1,
      },
    },
  },
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
      height: 20,
    },
  },
  responsive: true,

  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Remanufacturing vs Recycling",
    },
  },
};

const LineChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = () => {
      const url = "https://jsonplaceholder.typicode.com/comments";
      const dataset1 = []; //recycle
      const dataset2 = []; //remanufacture
      const lableset = [];
      fetch(url)
        .then((data) => {
          console.log("API data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("res", res);
          for (const d of res) {
            dataset1.push(d.dt1);
            dataset2.push(d.dt2);
            lableset.push(d.name);
          }

          setData({
            labels: lableset,
            datasets: [
              {
                label: "Recycle rate",
                data: dataset1,
                borderColor: "rgba(255,99,132)",
                backgroundColor: "rgba(255,99,132,0.5)",
              },
              {
                label: "Remanufacturing potential %",
                data: dataset2,
                borderColor: "rgba(54,162,235,0.5)",
                backgroundColor: "rgba(54,162,235, 0.5)",
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
  return <Line data={data} options={options} />;
};

export default LineChart;
