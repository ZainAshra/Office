// this component will add after corrasole
import { Button, Card } from "react-bootstrap";
import "./allcards.css";
import React from "react";
import sampleimg from "..//images/productimg.png"

export const Allcards = (props) => {
 
  console.log("HHHHHHHHHHHHHH");

  return (
   




<>
{/* <h1>
  cards
</h1>
<div className="cards container" >
<div className="card">

    <Card style={{height:"150px",width:"150px"}}>
      <Card.Img src={sampleimg}></Card.Img>
    </Card>
   
    </div>
    
    </div> */}






    <Card  style={{ width: '15rem',hight: "10remt",border: "none"}} >
    <Card.Img style={{border:"1px solid lightgrey",borderRadius:"5px"}} variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.brand}</Card.Title>
      <Card.Text>
      {props.title}
      </Card.Text>
      <Button variant="primary">Add To Cart</Button>
      
    </Card.Body>
  </Card>
  
 
  </>

    
  );
};

export default Allcards;
