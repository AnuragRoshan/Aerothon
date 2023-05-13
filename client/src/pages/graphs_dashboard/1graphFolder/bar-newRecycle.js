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

const options = {
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
      position: "right",
    },
    title: {
      display: true,
      text: "Recycle vs New Product Comparison",
    },
  },
};

const BarNewRecycleA = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect((url) => {
    const fetchData = () => {
      const url = "https://jsonplaceholder.typicode.com/comments";
      const dataset1 = [];
      const dataset2 = [];
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
            dataset1.push(d.new);
            dataset2.push(d.recycle);
            lableset.push(d.name);
          }

          setData({
            labels: lableset,
            datasets: [
              {
                label: "Recycled",
                data: dataset1,
                borderColor: "rgba(255,99,132)",
                backgroundColor: "rgba(255,99,132,0.5)",
              },
              {
                label: "New Product",
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
  return <Bar data={data} options={options} />;
};

export default BarNewRecycleA;
