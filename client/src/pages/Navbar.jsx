import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";

const Navbar = ({ user }) => {
  // console.log(user);
  // const user = true;
  const handleInputs = async () => {
    // setfilter({ ...filter, [e.target.name]: e.target.value });
    // console.log("OUT");
    // const { data } = await axios.get(`http://localhost:5000/logout`);
    // console.log(data);
    sessionStorage.clear();

    window.location.reload();
    // setUser(null);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "rgb(232, 227, 227)" }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            style={{
              fontSize: "3rem",
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            Airbus
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ marginTop: "1rem" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/Dashboard"
                  style={{ marginTop: "1rem" }}
                >
                  Dashboard
                </a>
              </li>
              {user ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <a className="nav-link" id="sign" href="/">
                      <button
                        onClick={handleInputs}
                        style={{
                          border: "1px solid transparent",
                          borderRadius: "1rem",
                          width: "7rem",
                          padding: "0.8rem",
                        }}
                      >
                        {/* {user ? <>Sign Out</> : <>Sign In</>} */}
                        Sign Out
                      </button>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <a className="nav-link" id="sign" href="/signup">
                      <button
                        style={{
                          border: "1px solid transparent",
                          borderRadius: "1rem",
                          width: "7rem",
                          padding: "0.8rem",
                        }}
                      >
                        {/* {user ? <>Sign Out</> : <>Sign In</>} */}
                        Sign In
                      </button>
                    </a>
                  </li>
                </>
              )}

              {/* <li>{user ? <>{user.user.companyName}</> : <></>}</li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
