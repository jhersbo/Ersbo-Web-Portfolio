import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import HeroNav from './components/HeroNav';
import LandingScreen from './components/LandingScreen';

import { ReactNode } from 'react';
import React from 'react';

class App extends React.Component<{}, { page: string }>{
  constructor(props: any){
    super(props);
    this.state = {
      page: 'landing',
    }
    this.setView = this.setView.bind(this)
  }
  setView = (page: string)=>{
    this.setState({page: page})
  }
  render(): ReactNode {
    if(this.state.page === 'landing'){
      return(
        <LandingScreen/>
      )
    }else{
      return(
        <HeroNav/>
        //other stuff
      )
    }
  }
}

export default App;