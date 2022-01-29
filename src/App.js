import './App.css';
import Navbar from './components/navbar/navbar';
import AddBug from './components/Bug/AddBug';
import Buglist from './components/buglist/buglist';
import Login from './components/login/login';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      
      
      {/* <Login/> */}
      <Router>
        <Navbar />
        <Buglist/>
        <AddBug/>
        {/* <div className="container"> */}
        <Routes>
        {/* <Route exact path="/" element={<Home/>}/> */}
        {/* <Route exact path="/about" element={<About/>} /> */}
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        {/* <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} /> */}
        </Routes>
        {/* </div> */}
        
      </Router>
    </div>
  );
}

export default App;
