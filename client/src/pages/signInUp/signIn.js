import { useState } from "react";
import "../Assets/css/login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignIn() {
  const [user, setUser] = useState({});

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async () => {
    await axios
      .post(`http://localhost:5000/login`, user, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        // var message = response.data.message;
        // var status = response.data.status;
        // if (status === "200") {
        //   toast.success(`${message}`, {
        //     position: "top-center",
        //     autoClose: 2000,
        //     pauseOnHover: false,
        //     pauseOnFocusLoss: false,
        //     draggable: true,
        //     textAlign: "center",
        //     // theme: "dark",
        //   });
        //   // window.location.reload();
        // } else if (status === "202") {
        //   toast.warn(`${message}`, {
        //     position: "top-center",
        //     autoClose: 2000,
        //     pauseOnHover: false,
        //     pauseOnFocusLoss: false,
        //     draggable: true,
        //     textAlign: "center",
        //     theme: "dark",
        //   });
        // } else if (status === "500") {
        //   toast.error(`${message}`, {
        //     position: "top-center",
        //     autoClose: 2000,
        //     pauseOnHover: false,
        //     pauseOnFocusLoss: false,
        //     draggable: true,
        //     textAlign: "center",
        //     theme: "dark",
        //   });
        // }
      });
    // perform sign-in logic here
  };

  return (
    <div className="signin-container" >
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <form style={{ marginLeft: "auto", marginRight: "auto" }}>
        <label htmlFor="userName">User Name:</label>
        <input
          type="userName"
          id="userName"
          name="userName"
          onChange={(e) => handleInputs(e)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => handleInputs(e)}
          required
        />
        <button onClick={handleSubmit} type="submit">Sign In</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default SignIn;
