import "../Assets/css/login.css";
// import { FaLock, FaLockOpen, FaUser, FaAngleLeft } from "react-icons/fa";
// import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";

const First = () => {
  return (
    <div className="login-form">
      <div class="login-field">
        <i class="login-icon fas fa-user"> </i>
        <input type="text" class="login-input" placeholder="Name" />
      </div>
      <div class="login-field ">
        <input type="email" class="login-input" placeholder="Email" />
      </div>
      <div class="login-field ">
        <input type="password" class="login-input" placeholder="Password" />
      </div>
    </div>
  );
};
const Second = () => {
  return (
    <div>
      <div className="login-form">
        <div class="login-field ">
          <input
            type="text"
            class="login-input"
            placeholder="Select Username"
          />
        </div>
        <div class="login-field ">
          <input type="text" class="login-input" placeholder="Phone" />
        </div>
        <div class="login-field ">
          <input type="text" class="login-input" placeholder="DOB " />
        </div>
        <div class="login-field ">
          <input type="text" class="login-input" placeholder="College " />
        </div>
      </div>
    </div>
  );
};

const SignIn = () => {
  const [showComponent1, setShowComponent1] = useState(true);

  const handleButtonClick = () => {
    setShowComponent1(!showComponent1);
  };

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
            <div className="">
              <button onClick={handleButtonClick} type="submit" className="btn">
                Continue
              </button>
            </div>
          </div>
          <div className="login-form-right">
            <div className="">
              <img src={img1} alt="" srcset="" />
            </div>
            <div className="login-new-user">
              New User ? <a href="">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
