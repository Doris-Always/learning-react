import React from "react";
import { Link } from "react-router-dom";
// import PIE from "./Images/pie.png";
const Navbar = () =>{
   
   return (
      <div className="header">
        <div className="navbar navbar-expand-lg bg-dark navbar-dark shadow">
          <div className="container">
          <div>
            <img src="./Images/pie.png" alt="logo" className="my-image"/> 
             <a href="#" className ="navbar-brand fs-3"><span>D</span>ee-pie</a>
          </div>
          <button type="button" className ="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className ="navbar-toggler-icon "></span>
        </button>
        <div className ="collapse navbar-collapse" id="navbarCollapse">
           <div className ="navbar-nav ms-auto fs-4">
                <Link to ="/" className ="nav-item nav-link ">Home</Link>
                <Link to="/about" className ="nav-item nav-link">About</Link>
                <Link to="/contact" className ="nav-item nav-link">Contact</Link>
           </div>
        </div>
          </div>
          
        </div>

      </div>
   )
}

export default Navbar;