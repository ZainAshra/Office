// this component will add after corrasole
import { Button, Card } from "react-bootstrap";
import "./allcards.css";
// import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtocartdata } from "../redux/actions";

export const Allcards = (props) => {
  const dispatch = useDispatch();



  const addToCartBtn = (data) => {
    dispatch(addtocartdata('ADDTOCART',data))
  };





 

  return (
    <>
      <Card style={{ width: "15rem", hight: "10remt", border: "none" }}>
        <Card.Img
          style={{ border: "1px solid lightgrey", borderRadius: "14px" }}
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title>{props.brand}</Card.Title>
          <Card.Text>{props.title}</Card.Text>
          <Button
          className="lg:bg-blue-400"
           
            onClick={() => {
              addToCartBtn(props.alldata);
            }}
            variant="primary"
          >

            Add To Cart
          </Button>
         

        </Card.Body>
      </Card>
    </>
  );
};

export default Allcards;
