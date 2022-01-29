import logo from './logo.svg';
import './App.css';
import AddBug from './components/Bug/AddBug';

import Ournav from './components/navbar/navbar';
import Table from './components/buglist/buglist'
function App() {
  return (
    <div className="App">
      <Table/>
      <AddBug/>

    </div>
  );
}

export default App;
