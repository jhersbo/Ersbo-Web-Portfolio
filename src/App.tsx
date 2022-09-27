import './sass/styles.scss'
import HeroNav from './components/HeroNav';
import LandingScreen from './components/LandingScreen';
import About from './components/About';

import { ReactNode } from 'react';
import React from 'react';

interface IMyProps{
  page: string
}
class App extends React.Component<{}, IMyProps>{
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
        <div className='app'>
          <LandingScreen viewChange={this.setView}/>
        </div>
      )
    }else{
      return(
        <div className='app'>
          <HeroNav/>
        </div>
      )
    }
  }
}

export default App;