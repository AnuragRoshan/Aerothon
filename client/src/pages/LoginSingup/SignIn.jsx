import { Button } from "bootstrap";
import "../Assets/css/login.css";
// import { FaLock, FaLockOpen, FaUser, FaAngleLeft } from "react-icons/fa";
// import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const First = () => {
  const [user, setUser] = useState({});

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const submitForm = async () => {
    // alert("Submitted")
    await axios
      .post(`http://localhost:5000/register`, user)
      .then((response) => {
        var message = response.data.msg;
        var status = response.status;
        console.log(message);

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
      });
  };

  return (
    <div className="login-form">
      <div class="login-field">
        <i class="login-icon fas fa-user"> </i>
        <input
          type="text"
          class="login-input"
          name="companyName"
          placeholder="Company Name"
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <div class="login-field">
        <i class="login-icon fas fa-user"> </i>
        <input
          name="username"
          type="text"
          class="login-input"
          placeholder="Email"
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <div class="login-field ">
        <input
          type="password"
          class="login-input"
          placeholder="Password"
          name="password"
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <div class="login-field">
        <i class="login-icon fas fa-user"> </i>
        <input
          type="text"
          class="login-input"
          name="userType"
          placeholder="User Type (manufacturer/airlines/recycling)"
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <a href="/signup">
        <button
          onClick={() => submitForm()}
          style={{ padding: "1rem", width: "9rem", borderRadius: "2rem" }}
        >
          Sign Up
        </button>
      </a>
      <ToastContainer />
    </div>
  );
};
const SignIn = () => {
  const [showComponent1, setShowComponent1] = useState(true);

  const img1 =
    "https://github.com/AnuragRoshan/images/blob/main/23.jpg?raw=truecd c ";
  return (
    <div className="login-top">
      <div>
        <div className="login-form-top display-flex-row">
          <div
            className="login-form-right"
            style={{ paddingInlineStart: "1rem" }}
          >
            <div className="login-title">
              <h2>SIGN UP</h2>
            </div>
            <div>
              <First />
            </div>
          </div>
          <div className="login-form-right">
            <div className="">
              <img src={img1} style={{ width: "40rem" }} alt="" srcset="" />
            </div>
            <div className="login-new-user"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
