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
      text: "Stacked graph ",
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

function addVariance(array, variance) {
  const mean = array.reduce((a, b) => a + b, 0) / array.length;
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.round(array[i] + variance * (Math.random() - 0.5) * mean);
  }
}

const StaggedCHartGraph = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    const fetchData = () => {
      const url = "https://jsonplaceholder.typicode.com/comments";

      const dataset1=[];
      const dataset2 =[];
      const dataset3 =[];
      const dataset4 = []
      const lableset = [];
      fetch(url)
        .then((data) => {
          console.log("API data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("res", res);

          for (const x of res) {
            dataset1.push(x.dt1);
            dataset2.push(x.dt2);
            dataset3.push(x.dt3);
            dataset4.push(x.dt4);
            lableset.push(x.name);
          }
          for (let i = 0; i < dataset1.length; i++) {
            dataset1[i] = Math.round(dataset1[i] * 3);
          }
          for (let i = 0; i < dataset2.length; i++) {
            dataset2[i] = Math.round(dataset2[i] * 0.6);
          }
          for (let i = 0; i < dataset3.length; i++) {
            dataset3[i] = Math.round(dataset3[i] * 4);
          }
          addVariance(dataset1, 0.1); // add 10% variance
          addVariance(dataset2, 0.05); // add 5% variance
          addVariance(dataset3, 0.15); // add 15% variance
          addVariance(dataset4, 0.2); // add 20% variance

          setData({
            labels: lableset,
            datasets: [
              {
                label: "Landfill waste saved",
                data: dataset1,
                borderColor: "rgba(255,99,1)",
                backgroundColor: "rgba(255,99,1,0.5)",
              },
              {
                label: "Water Usage Saved",
                data: dataset2,
                borderColor: "rgba(54,162,235,0.5)",
                backgroundColor: "rgba(54,162,235, 0.5)",
              },
              {
                label: "Carbon Footprint saved",
                data: dataset3,
                borderColor: "",
                backgroundColor: "rgb(60, 179, 113)",
              },
              {
                label: "Energy Consumption saved",
                data: dataset4,
                borderColor: "",
                backgroundColor: "#ffed99",
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
  // return (<div>Hello</div>)
};

export default StaggedCHartGraph;
