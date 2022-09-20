import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import HeroNav from './components/HeroNav';

function App() {
  return (
    <div className="App">
      <Router>
        <HeroNav></HeroNav>
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;