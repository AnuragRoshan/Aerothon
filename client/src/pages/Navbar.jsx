import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  // console.log(user);
  // const user = true;
  const handleInputs = async () => {
    await axios
      .post("http://localhost:5000/logout", null, {
        withCredentials: true,
      })
      .then((response) => {
        // var message = response.data.msg;
        // var status = response.status;
        var message = response.data.msg;
        var status = response.status;

        if (status === 200) {
          toast.success(`${message}`, {
            position: "top-center",
            autoClose: 2000,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            textAlign: "center",
          });
          // window.location.reload();
        } else if (status === 202) {
          toast.warn(`${message}`, {
            position: "top-center",
            autoClose: 2000,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            textAlign: "center",
          });
        }
        console.log(response);
        setTimeout(() => {
          window.location.reload();
        }, 2001);
      });
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "rgb(232, 227, 227)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          height: "5rem",
          fontFamily: "Montserrat",
        }}
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="/home"
            style={{
              fontSize: "3rem",
              fontWeight: "600",
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
                <a
                  className="nav-link"
                  href="/home"
                  style={{ marginTop: "1rem" }}
                >
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/Signin"
                  style={{ marginTop: "1rem" }}
                >
                  Sign Up
                </a>
              </li>
              {user ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <a className="nav-link" id="sign" href="#">
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

                      <ToastContainer />
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
