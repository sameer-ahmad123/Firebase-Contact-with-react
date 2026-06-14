import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
const App = () => {
   const [popup, setpopup] = useState(false)
  return (
    <div className='bg-slate-900' >
      <Navbar setpopup= {setpopup}/>
      <Main popup={popup}/>
    </div>
  )
}

export default App
