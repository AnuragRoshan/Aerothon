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

const options={
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 2,
            height: 20,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};

// const label= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
// const data= {
//     labels: label,
//     datasets:[
//         {
//             label:'dataset 1',
//             data:[10,20,30,40,50,60,70,80,90,100],
//             borderColor: 'rgba(255,99,132)',
//             backgroundColor: 'rgba(255,99,132,0.5)',
//         },
//         {
//             label:'dataset 2',
//             data:[100,90,80,70,60,50,40,30,20,10],
//             borderColor: 'rgba(54,162,235,0.5)',
//             backgroundColor: 'rgba(54,162,235, 0.5)',
//         },
//     ],
// }

const HorizontalChart=()=>{
    const [data, setData] = useState({
      labels: [],
      datasets: [],
    });

    useEffect(()=>{
        const fetchData=()=>{
            const url="https://jsonplaceholder.typicode.com/comments"
            const dataset1 = [10000, 20000, 30000, 40000, 50000];  //recycle
            const dataset2 = [50000, 40000, 30000, 20000, 10000];  //remanufacture
            const lableset=['Carbon footprint', 'Water Usage', 'Landfill Waste', 'Energy Consumption', 'Toxicity'];
            fetch(url).then((data)=>{
                console.log("API data", data)
                const res= data.json();
                return res;
            }).then((res)=>{
                console.log("res", res);
                for(const d of res){
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
            .catch((err)=>{
                console.log("error");
            })

        }
        fetchData();
    },[]);
    return (<Bar data={data} options={options} />)
    // return (<div>Hello</div>)
}

export default HorizontalChart;
