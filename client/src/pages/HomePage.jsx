import React, { useEffect } from "react";
import "./styles.css";
import Data from "./Data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "bootstrap";
import axios from "axios";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [datas, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:5000/filter/`);
    // console.log(data.doc[0]);
    setData(data);
  };
  console.log(datas);

  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = datas.doc.slice(firstIndex, lastIndex);
  const npage = Math.ceil(datas.doc.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    // Check if the checkbox value is already in the state array
    if (selectedCheckboxes.includes(value)) {
      // If it exists, remove it from the array
      setSelectedCheckboxes(
        selectedCheckboxes.filter((checkbox) => checkbox !== value)
      );
      console.log(selectedCheckboxes);
    } else {
      // If it doesn't exist, add it to the array
      setSelectedCheckboxes([...selectedCheckboxes, value]);
      console.log(selectedCheckboxes);
    }
  };

  return (
    <div style={{ marginBlockStart: "4rem", paddingInline: "2rem" }}>
      <div style={{ fontFamily: "cursive", fontSize: "2rem" }}>
        Hey Manufacturer
      </div>
      <div
        style={{
          marginBlock: "1rem",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: "1", textAlign: "center" }}>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Remaining Age (2)"
            style={{
              outline: "none",
              paddingInline: "1rem",
              paddingBlock: "0.6rem",
              borderRadius: "1rem",
              border: "1px solid transparent",
              backgroundColor: "rgb(232, 227, 227)",
              color: "black",
            }}
          />
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Min CO2 Footprint Saved (431)"
            style={{
              outline: "none",
              paddingInline: "1rem",
              paddingBlock: "0.6rem",
              borderRadius: "1rem",
              border: "1px solid transparent",
              backgroundColor: "rgb(232, 227, 227)",
              color: "black",
            }}
          />
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Min Life Cycle Assessment Score "
            style={{
              outline: "none",
              paddingInline: "1rem",
              paddingBlock: "0.6rem",
              borderRadius: "1rem",
              border: "1px solid transparent",
              backgroundColor: "rgb(232, 227, 227)",
              color: "black",
            }}
          />
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Min Landfill Waste Saved"
            style={{
              outline: "none",
              paddingInline: "1rem",
              paddingBlock: "0.6rem",
              borderRadius: "1rem",
              border: "1px solid transparent",
              backgroundColor: "rgb(232, 227, 227)",
              color: "black",
            }}
          />
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Min Water Usage Saved"
            style={{
              outline: "none",
              paddingInline: "1rem",
              paddingBlock: "0.6rem",
              borderRadius: "1rem",
              border: "1px solid transparent",
              backgroundColor: "rgb(232, 227, 227)",
              color: "black",
            }}
          />
        </div>

        <div style={{ flex: "1", textAlign: "center" }}>
          <button
            style={{
              border: "none",
              paddingInline: "1rem",
              paddingBlock: "0.6rem",
              borderRadius: "1rem",
            }}
          >
            {" "}
            Apply Filters
          </button>
        </div>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Part Name</th>
              <th>Life Remaining</th>
              <th>Condition</th>
              <th>Location</th>
              <th>CO2 FootP Saved</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {console.log(datas.doc)}
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.unique_id}</td>
                <td>{d.part}</td>
                <td>{d.age}</td>
                <td>{d.condition}</td>
                <td>{d.location}</td>
                <td>{d.recycled_parts_carbon_footprint}</td>
                <td>
                  <input
                    type="checkbox"
                    id={d.unique_id}
                    name="part"
                    value={d.unique_id}
                    checked={selectedCheckboxes.includes(d.unique_id)}
                    onChange={handleCheckboxChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default HomePage;
