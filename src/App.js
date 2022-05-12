import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home'; 
import About from './component/about';
import Contact from './component/contact';
import './App.css';


function App() {
  
  return (
    <>
    
    <Navbar/>
    
     <Routes>
      <Route exact path='/' element ={<Home/> } />
      <Route path='/about' element ={<About/>} />
      <Route path='/contact' element ={<Contact/>} />
     </Routes>
    </>
  );
}

export default App;
