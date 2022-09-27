import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import HeroNav from './components/HeroNav';
import { ReactNode } from 'react';
import React from 'react';

class App extends React.Component{
  render(): ReactNode {
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
}

export default App;