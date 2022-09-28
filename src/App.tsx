import './sass/styles.scss'
import HeroNav from './components/HeroNav';
import LandingScreen from './components/LandingScreen';
import About from './components/About';
import Cookies from 'cookies-js';

import { ReactNode } from 'react';
import React from 'react';

let cookiePage:string = Cookies.get('page')

//lil timer function
function wait(ms:number){
  return new Promise(resolve => setTimeout(resolve, ms));
}
interface IMyProps{
  page: string
}
class App extends React.Component<{}, IMyProps>{
  constructor(props: any){
    super(props);
    this.state = {
      page: cookiePage? cookiePage: 'landing',
    }
    this.setView = this.setView.bind(this)
  }
  setView = (page: string)=>{
    wait(1500).then(()=>{
      this.setState({page: page})
    })
  }
  render(): ReactNode {
    if(this.state.page === 'landing'){
      return(
        <div className='app'>
          <LandingScreen viewChange={this.setView}/>
        </div>
      )
    }else{
      return(
        <div className='app'>
          <HeroNav/>
          <About/>
        </div>
      )
    }
  }
}

export default App;