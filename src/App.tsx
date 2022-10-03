import './sass/styles.scss'
import LandingScreen from './components/LandingScreen';
import HomeScreen from './components/HomeScreen';
import Cookies from 'cookies-js';

import { ReactNode } from 'react';
import React from 'react';

let cookiePage:string = Cookies.get('page')
if(cookiePage){
  cookiePage = JSON.parse(cookiePage)
}

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
    wait(150).then(()=>{
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
          <HomeScreen/>
        </div>
      )
    }
  }
}

export default App;