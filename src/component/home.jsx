import React from "react";
import Card from "./card";
import pic from "../Images/pie6.jpg";
import pic2 from "../Images/pie7.jpg"
import pic3 from "../Images/pie3.jpg"
import pic4 from "../Images/pie5.jpg"
import pic5 from "../Images/pie4.jpg"
import pic6 from "../Images/pie1.jpg"
import pic7 from "../Images/pie2.jpg"
import pic8 from "../Images/pie8.jpg"





const Home = () =>{
  const content ={
    title: "Cherry Pie",
    text: "Our tasty cherry pie available all week round",
   
    title2: "Cranberry pie",
    text2: "You will get a good satisfaction with a bite",

    title3:"Strawberry cheese cake",
    text3: "Weekend is nice,with our special weekend pie",

    title4:"Blueberry pie",
    text4: "Your dinner specialty,it's all good with family at home",

    title5:"Strawberry pie(small)",
    text5: "Your dinner specialty,single set",

    title6:"Pumpkin pie",
    text6: "Your dinner specialty,single set",

    title7:"Rhubarb pie",
    text7: "Your dinner specialty,single set",

    title8:"Peach pie",
    text8: "Your dinner specialty,single set"
  };
  return (
    <>
    <h4 className="head"> Get A Taste Of Goodness At Dee-pie Shop!</h4>
    <div className="container">
      <div className="row my-3">
        <Card 
          img={pic}
          title = {content.title} 
          text = {content.text}/>
        <Card
          img={pic2}
          title = {content.title2} 
          text = {content.text2}/>
        <Card 
          img={pic3}
          title= {content.title3} 
          text = {content.text3}/>
        <Card 
          img={pic4} 
          title= {content.title4} 
          text = {content.text4}/>
        
      </div>

      <div className="row my-4">
      <Card 
        img={pic5}
        title  = {content.title5} 
        text = {content.text5}/>
      <Card 
        img={pic6}
        title  = {content.title6}
        text = {content.text6}/>
      <Card
        img={pic7} 
        title  = {content.title7} 
        text = {content.text7}/>
      <Card  
        img={pic8}
        title = {content.title8} 
        text = {content.text8}/>
      </div>
      
    </div>

    </>
   
  )
}
export default Home;