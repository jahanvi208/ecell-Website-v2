import React from "react"
import './App.css'
import Home from "./Pages/Home"
import Teams from "./Pages/Teams"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/teams' element={<Teams/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
