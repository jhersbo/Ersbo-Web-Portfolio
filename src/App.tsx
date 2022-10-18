import './sass/styles.scss'
import LandingScreen from './components/LandingScreen';
import HomeScreen from './components/HomeScreen';

import { ReactNode } from 'react';
import React from 'react';

//lil timer function
function wait(ms:number){
  return new Promise(resolve => setTimeout(resolve, ms));
}
interface IMyProps{
  page: string
  thinScreenBool: boolean
}
class App extends React.Component<{}, IMyProps>{
  constructor(props: {} | Readonly<{}>){
    super(props);
    this.state = {
      page: 'landing',
      thinScreenBool: false
    }
    this.setView = this.setView.bind(this)
  }

  componentDidMount(): void {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }
  resize(){
    this.setState({thinScreenBool: window.innerWidth <= 900})
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
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
          <LandingScreen viewChange={this.setView} thinScreenBool={this.state.thinScreenBool}/>
        </div>
      )
    }else{
      return(
        <div className='app'>
          <HomeScreen thinScreenBool={this.state.thinScreenBool}/>
        </div>
      )
    }
  }
}

export default App;