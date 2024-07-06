import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Add from './components/Add'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    
      
      <Navbar/>
     
      <Routes>
     
      <Route path='/home' element={<Dashboard/>}></Route>
      <Route path='/'element={<Add/>}></Route>

    
      </Routes>
    
    
       
      
    </>
  )
}

export default App
