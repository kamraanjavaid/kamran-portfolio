import React from 'react'
import Navbar from './components/Navbar/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';


const App = () => {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/services" element={<Services/>} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App