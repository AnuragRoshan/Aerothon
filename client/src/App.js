// import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import Navbar from './pages/Navbar';
import SignIn from './pages/LoginSingup/SignIn.jsx';
import SignUp from "./pages/LoginSingup/SignUp.jsx"
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
  return (
    <>
      <Router>
        {/* <Sidebar> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          {/* <Route exact path="/analytics" element={<Analytics />} />
            <Route exact path="/Tasks" element={<Tasks />} />
            <Route exact path="/messages" element={<Messages />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/saved" element={<Saved />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route path="/project/modify" element={<ProjectForm />} />
            <Route path="/project/detail" element={<ProjectDetail />} />
            <Route exact path="*" element={<>Not Found</>} /> */}
        </Routes>
        {/* </Sidebar> */}
      </Router>
    </>
  );
}

export default App;
