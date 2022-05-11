import React from "react";

const Card = ({img,title,text})=>{
    return(
      <>
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card shadow rounded-2">
                  <img src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <a href="" className="btn btn-primary">order now!</a>
                    </div>
                </div>
                
      </div>
      </>
    )
}

export default Card;