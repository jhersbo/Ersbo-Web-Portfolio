import './sass/styles.scss'
import LandingScreen from './components/LandingScreen';
import HomeScreen from './components/HomeScreen';

import { useState, useEffect } from 'react'

import { useMediaQuery } from '@mui/material'

const App = ()=>{
  const [page, setPage] = useState('landing')
  const [thinScreenBool, setThinScreenBool] = useState(false)

  const thinScreen = useMediaQuery('(max-width: 900px)')

  useEffect(()=>{
    setThinScreenBool(thinScreen)
  }, [])

  if(page === 'landing'){
    return(
      <div className='app'>
        <LandingScreen setPage={setPage} thinScreenBool={thinScreenBool}/>
      </div>
    )
  }else{
    return(
      <div className='app'>
        <HomeScreen thinScreenBool={thinScreenBool}/>
      </div>
    )
  }
}

export default App;