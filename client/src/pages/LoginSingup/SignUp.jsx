import { useState } from "react";
import "../Assets/css/login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FaEnvelope, FaLock, FaLockOpen, FaUser } from "react-icons/fa";

const Settings = () => {
  const [user, setUser] = useState({});

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const submitForm = async () => {
    // alert("Submitted");
    await axios
      .post(`http://localhost:5000/login`, user, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        var message = response.data.message;
        var status = response.data.status;
        if (status === "200") {
          toast.success(`${message}`, {
            position: "top-center",
            autoClose: 2000,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            textAlign: "center",
            // theme: "dark",
          });
          // window.location.reload();
        } else if (status === "202") {
          toast.warn(`${message}`, {
            position: "top-center",
            autoClose: 2000,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            textAlign: "center",
            theme: "dark",
          });
        } else if (status === "500") {
          toast.error(`${message}`, {
            position: "top-center",
            autoClose: 2000,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            textAlign: "center",
            theme: "dark",
          });
        }
      });
  };

  const img1 =
    "https://github.com/AnuragRoshan/images/blob/main/Lovepik_com-450098997-Account%20login%20flat%20illustration.png?raw=true";
  return (
    <div className="login-top">
      <div>
        <div className="login-form-top display-flex-row">
          <div className="login-form-right">
            <div className="">
              <img src={img1} alt="" srcset="" />
            </div>
            <div className="login-new-user">
              New User ?<a href="">Sign Up</a>
            </div>
          </div>
          <div className="login-form-right">
            <div className="login-title">
              <h2>LOGIN</h2>
            </div>
            <div className="login-form">
              <div class="login-field">
                <i class="login-icon fas fa-user"> </i>
                <input
                  type="text"
                  name="username"
                  class="login-input"
                  placeholder="Username"
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
            </div>
            <div className="">
              <button
                type="submit"
                className="btn"
                onClick={() => submitForm()}
              >
                Login
              </button>
              <ToastContainer className="toastifyCss" />
            </div>
            <div className="display-flex-row social-section">
              <div className="social">or login with</div>
              <div className=" social">A</div>
              <div className=" social">B</div>
              <div className=" social">N</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
