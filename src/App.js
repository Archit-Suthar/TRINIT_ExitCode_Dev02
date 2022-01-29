import './App.css';
import Navbar from './components/navbar/Navbar';
import AddBug from './components/Bug/AddBug';
import Buglist from './components/buglist/Buglist';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AddBug/>
      <Buglist/>

    </div>
  );
}

export default App;
