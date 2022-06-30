import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Tutorial from './components/Tutorial/Tutorial';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar title="COMPLAIN FOX" />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/tutorial" element={<Tutorial/>} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );

}

export default App;
