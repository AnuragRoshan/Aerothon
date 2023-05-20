// import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./pages/Navbar";
import SignUp from "./pages/LoginSingup/SignUp.jsx";
import SignIn from "./pages/LoginSingup/SignIn.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Landing from "./pages/Landing.jsx";

// import Analytics from './pages/Analytics';
// import Dashboard from './pages/Dashboard';
// import Tasks from './pages/Tasks';
// import Messages from './pages/Messages';
// import Saved from './pages/Saved';
// import Settings from './pages/Settings';
// import Users from './pages/Users';
// import Sidebar from './components/Sidebar';
// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';
// import ProjectForm from './pages/Project/ProjectForm';
// import Projects from './pages/Project/Projects';
// import ProjectDetail from './pages/Project/ProjectDetail';


function App() {

  const [user, setUser] = useState(null);
  const fetchData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/logedinuser/`, { withCredentials: true }
    );
    // console.log(data.user);
    setUser(data.user);
  };

  // console.log(user);
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <Router>
        {/* <Sidebar> */}
        <Navbar user={user} />

        <Routes>
          <Route exact path="/home" element={<HomePage user={user} />} />
          <Route exact path="/" element={<Landing />} />
          {/* <Route exact path="/signUp" element={<SignUp />} /> */}
          <Route exact path="/signup" element={user ? <Navigate to="/home" /> : <SignUp />} />
          <Route exact path="/signin" element={user ? <Navigate to="/home" /> : <SignIn />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* </Sidebar> */}
      </Router>
    </>
  );
}

export default App;
