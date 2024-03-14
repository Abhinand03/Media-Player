import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Dashbord from './pages/Dashbord'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' Component={Landing}/>
      <Route path='/dash' Component={Dashbord}/>
      <Route path='/his' Component={History}/>
      
    </Routes>
    <Footer/>
    
     
    </>
  )
}

export default App
