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
      text: "Stacked graph of Overall Savings",
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



const StaggedCHart=()=> {
    const [data, setData] = useState({
      labels: [],
      datasets: [],
    });
    useEffect(()=>{
        const fetchData=()=>{
            const url="https://jsonplaceholder.typicode.com/comments"
            const dataset1 = [897557, 914243, 871377, 885149, 864191];  //land
            const dataset2 = [9622801, 9740619, 9993200, 9632419, 9666117];  //water
            const dataset3 = [883784, 898664, 915746, 858232, 848451]; //carbon
            const dataset4 = [4886745, 4894916, 4977842, 4852334, 4738604]; //energy



            const lableset=['Avionics', 'Engine', 'Fuselage', 'Landing Gear', 'Wings'];
            fetch(url).then((data)=>{
                console.log("API data", data)
                const res= data.json();
                return res;
            }).then((res)=>{
                console.log("res", res);

                console.log("dataset1", dataset1);
                console.log("dataset2", dataset2);

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
            .catch((err)=>{
                console.log("error");
            })

        }
        fetchData();
    },[]);
    return (<Bar data={data} options={options} />)
    // return (<div>Hello</div>)
}

export default StaggedCHart;

