import React from "react";

const Contact = () =>{
  return (
    <div>
      <div className="container">
      <form className="text-center py-4">
        {/* <fieldset> */}
          <label>
            <div className = 'label'> Name:</div> 
            <input type = 'text' name='name'  className="input" />
          </label>
         
           <p></p>
          
          <p></p>
          <label>
            <div className = 'label'> Email:</div>
            <input type = 'text' name='email' className="input"  />
          </label>
         
          <p></p>
          
          

           <p></p>
          <label>
            <div className = 'label'> Address:</div>
            <input  type = 'text' name='address' className="input" />
          </label>
          

           <p></p>
          <label>
            <div className = 'label'>Your Message:</div> 
            <textarea name='desc'  className="message" />

           
          </label>
          
        {/* </fieldset> */}
        <p></p>
        <button type='submit' className="btn btn-primary">Submit</button>
      </form>
      </div>
      
    </div>
  )
}
export default Contact;