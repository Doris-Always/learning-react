import React from 'react';
// import React,;
import { Routes,Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home'; 
import About from './component/about';
import Contact from './component/contact';
import './App.css';

function App() {
  
  // const [colorChange,setcolorChange] = useState("brown")
  // const changeColorFunction = () =>{
  //   setcolorChange("blue")
  // }
  return (
    <>
    {/* <div >
      <button onClick={changeColorFunction}>click me</button>
       <h1> <span style={{color:colorChange}}>D</span>oris </h1>
    </div> */}
    <Navbar/>
    
     <Routes>
      <Route exact path='/' element ={<Home heading = "Get A Taste Of Goodness At Dee-pie Shop!"/> } />
      <Route path='/about' element ={<About/>} />
      <Route path='/contact' element ={<Contact/>} />
     </Routes>
    </>
  );
}

export default App;
