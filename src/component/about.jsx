import React from "react";
import pic from "../Images/about.jpg"

const About = () =>{
  
  return (
    <>
    <div><h4 className="text-center py-3">Place Your Order and We Will Be Right There...</h4></div>
    <div className="container">
        <div className="row my-4"> 
        
        <div className="col-md-6 col-sm-12">
          <p className="fs-5">Dee-pie is a one stop shop for your tasty pie.You can make special orders from us by just clicking "order now!!" and we are right there at you doorstep.</p>
          <p className="fs-5">You can consider stopping by our shop on a hot day to get our free chocolate icecream while having a taste of our pie. </p>
          <p className="fs-5">You can get all pies on special order,from "Mississipi mud pie" to "Zucchini pie" with "Goat chesse"</p>

          <h5>All fun giving, just for you!</h5>
          <p></p>
          <a href="#" className="btn btn-primary">order now!</a>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src= {pic} alt=""  style={{height:"100%",width:"100%"}}/>
        </div>
      </div>
    </div>
    
    </>
   
  )
}
export default About;