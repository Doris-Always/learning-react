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
  let contents = [
    {
      title: "Cherry Pie",
      text: "Our tasty cherry pie available all week round",
      img: pic
    },
    {
      title: "Cranberry pie",
      text: "You will get a good satisfaction with a bite",
      img:pic2
    },
    {
      title:"Strawberry cheese cake",
      text: "Weekend is nice,with our special weekend pie",
      img:pic3
    },
    {
      title:"Blueberry pie",
      text: "Your dinner specialty,it's all good with family at home",
      img:pic4
    },
    {
      title:"Strawberry pie(small)",
      text: "Your dinner specialty,single set",
      img:pic5
    },
    {
      title:"Pumpkin pie",
      text: "Your dinner specialty,single set",
      img:pic6
    },
    {
      title:"Rhubarb pie",
      text: "Your dinner specialty,single set",
      img:pic7
    },
    {
      title:"Peach pie",
      text: "Your dinner specialty,single set",
      img:pic8
    }
  ]
  
  return (
    <>
    <h4 className="head"> Get A Taste Of Goodness At Dee-pie Shop!</h4>
    <div className="container">
      <div className="row my-3 gy-3">

        {
            contents.map((item, index) => {
              return (
                <Card key={index} title={item.title} text={item.text} img={item.img}/>
            )
         })   
        }
        
      </div>
      

      {/* <div className="row my-4">
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
       */}
    </div>

    </>
   
  )
}
export default Home;