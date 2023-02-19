import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

//REACT-ROUTER-DOM
import { Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import "./App.css";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Loading from "./components/loading/Loading";
//PAGES
import About from "./pages/About";
import Contacting from "./pages/Contacting";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Lawss from "./pages/Lawss";
import ErrorPage from './pages/ErrorPage';
import Appointment from './pages/Appointment';

function App() {
  
  return (
    <>
    <Navbar/>
    <AnimatePresence>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pages" element={<Pages/>} />

      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contacting/>}/>
      <Route path="/laws" element={<Lawss/>}/>
      <Route path="/error" element={<ErrorPage/>}/>
      <Route path="/form" element={<Appointment/>}/>
    </Routes>
    </AnimatePresence>
    <Footer/>
    </>
  );
}

export default App;
