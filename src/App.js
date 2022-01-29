import './App.css';

import Login from './components/login/Login';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login />} />
        </Routes>
        {/* </div> */}
        
      </Router>
    </div>
  );
}

export default App;
