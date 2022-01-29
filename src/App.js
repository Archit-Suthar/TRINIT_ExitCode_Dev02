import logo from './logo.svg';
import './App.css';
import AddBug from './components/Bug/AddBug';
import { Table } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Table/>
      <AddBug/>

    </div>
  );
}

export default App;
