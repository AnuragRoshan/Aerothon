import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

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
      text: "Material of Avionics",
    },
  },
};

const PieMaterialA = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/comments";
      const dataSetX = [462, 512, 538, 489];

      const labelX = [
        "Aluminum",
        "Composite",
        "Steel",
        "Titanium",
      ];

      fetch(url)
        .then((data) => {
          console.log("Pie DAta", data);
          const resPie = data.json();
          return resPie;
        })
        .then((resPie) => {
          console.log("Pie Res", resPie);
          //   for (const item of resPie) {
          //     dataSetX.push(item.postId);
          //   }

          console.log("Pie Data Set", dataSetX);

          setData({
            labels: labelX,
            datasets: [
              {
                label: "dataset X",
                data: dataSetX,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
              },
            ],
          });
        })
        .catch((err) => {
          console.log("Pie Error", err);
        });
    };
    fetchData();
  }, []);

  return <Pie data={data} options={options} />;
  // return (<div>Hello world</div>)
};

export default PieMaterialA;
