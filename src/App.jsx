import React from "react"
import './App.css'
import Home from "./Pages/Home"
import Teams from "./Pages/Teams"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cursor from  './components/Cursor'
import Events from  './components/EventsPage'
import ContactUs from "./components/ContactUs"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Cursor />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/teams' element={<Teams/>} />
          <Route exact path='/events' element={<Events/>} />
          <Route exact path='/contactus' element={<ContactUs/>} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
