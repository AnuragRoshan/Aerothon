import React, { useState } from "react";
import "./signUp.css";

function SignUp() {


  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Company Name: ${companyName},  Company Type: ${companyType}, User Name: ${userName}, Password: ${password}`);
    // perform sign-up logic here
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <label htmlFor="companyType">Company Type:</label>
        <input
          type="text"
          id="companyType"
          name="companyType"
          value={companyType}
          onChange={(e) => setCompanyType(e.target.value)}
          required
        />
        <label htmlFor="userName">user Name:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="userpassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
