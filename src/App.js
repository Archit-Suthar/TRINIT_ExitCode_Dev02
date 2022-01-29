import './App.css';
import Navbar from './components/navbar/Navbar';
import AddBug from './components/Bug/AddBug';
import Buglist from './components/buglist/Buglist';
// import Login from './components/login/Login'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Buglist/>
      <AddBug/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
