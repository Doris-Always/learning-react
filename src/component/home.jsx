import React from "react";
// import IMAGES from "./Images/picture.js";


const Home = (props) =>{
  
  return (

    <>
     <h4 className="head">{props.heading}</h4>
     <div className="container">
     <div className="row py-4">
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow rounded-2">
                  <img src="./Images/applepie.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Cherry pie with a flavour that can keep you going</p>
                        <a href="" className="btn btn-primary">order now!</a>
                    </div>
                </div>
                
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow rounded-2">
                  <img src="./Images/strawberrypiesmall.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Cherry pie with a flavour that can keep you going</p>
                        <a href="#" className="btn btn-primary">order now!</a>
                    </div>
                </div>
                
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow rounded-2">
                  <img src="./Images/strawberrycheesecakesmall.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Cherry pie with a flavour that can keep you going</p>
                        <a href="#" className="btn btn-primary">order now!</a>
                    </div>
                </div>
                
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow rounded-2">
                  <img src="./Images/pumpkinpiesmall.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Cherry pie with a flavour that can keep you going</p>
                        <a href="#" className="btn btn-primary">order now!</a>
                    </div>
                </div>
                
      </div>
      
      </div> 

      <div className="row my-2">
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow rounded-2">
                  <img src="./Images/christmasapplepiesmall.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Cherry pie with a flavour that can keep you going</p>
                        <a href="#" className="btn btn-primary">order now!</a>
                    </div>
                </div>
                
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow rounded-2">
                  <img src="./Images/rhubarbpiesmall.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Cherry pie with a flavour that can keep you going</p>
                        <a href="#" className="btn btn-primary">order now!</a>
                    </div>
                </div>
                
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow rounded-2">
                  <img src="./Images/cranberrypiesmall.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Cherry pie with a flavour that can keep you going</p>
                        <a href="#" className="btn btn-primary">order now!</a>
                    </div>
                </div>
                
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow rounded-2">
                  <img src="./Images/blueberrycheesecakesmall.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Cherry pie with a flavour that can keep you going</p>
                        <a href="#" className="btn btn-primary">order now!</a>
                    </div>
                </div>
                
      </div>
      </div>
     </div>
    
    </>
   
  )
}
export default Home;