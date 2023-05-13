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
      const dataset1 = [
        72.100013193403 + Math.random() * 20,
        72.10601647 + Math.random() * 20,
        72.5406581 + Math.random() * 20,
        72.520788911 + Math.random() * 20,
        72.5005169 + Math.random() * 20,
      ]; //recycle

      const dataset2 = [
        48.860107281 + Math.random() * 10,
        49.706679193 + Math.random() * 10,
        49.9318234683 + Math.random() * 10,
        50.774421265 + Math.random() * 10,
        49.42116709 + Math.random() * 10,
      ]; //remanufacture

    //   const dataset1 = [
    //     72.100013193403, 72.10601647, 72.5406581, 72.520788911, 72.5005169,
    //   ]; //recycle

    //   const dataset2 = [
    //     48.860107281, 49.706679193, 49.9318234683, 50.774421265, 49.42116709,
    //   ]; //remanufacture
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
          for (const d of res) {
            dataset1.push(d.id);
            dataset2.push(d.postId);
            // lableset.push(d.name);
          }

          console.log("dataset1", dataset1);
          console.log("dataset2", dataset2);

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
  // return (<div>Hello</div>)
};

export default LineChart;
