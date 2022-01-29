import './App.css';
import BugStates from './context/bugs/BugStates';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/User/Dashboard';
function App() {
  return (
    <div className="App">
      <BugStates>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      </BugStates>
    </div>
  );
}

export default App;
