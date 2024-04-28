import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Depature from './Components/Depature/Depature';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Depature/>
  </div>
  </Router>
);

export default App;
