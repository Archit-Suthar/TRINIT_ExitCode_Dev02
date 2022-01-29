import './App.css';

import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Dashboard from './components/User/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* </div> */}
        
      </Router>
    </div>
  );
}

export default App;
