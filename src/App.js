import './App.css';
import Navbar from './components/navbar/navbar';
import AddBug from './components/Bug/AddBug';
import Buglist from './components/buglist/buglist';
import Login from './components/login/login'
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
