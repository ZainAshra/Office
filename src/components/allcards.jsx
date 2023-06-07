// this component will add after corrasole
import { Button, Card } from "react-bootstrap";
import "./allcards.css";
import {Link} from "react-router-dom"
// import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtocartdata, similarProductsAction } from "../redux/actions";
import { useState } from "react";
import ProductDescription from "./productDescription";
import {productDescriptionAction} from "../redux/actions/index.js"


export const Allcards = (props) => {
  const [singleProduct,setSingleProduct] = useState([])
  const dispatch = useDispatch();



  const addToCartBtn = (data) => {
    data.counter =1
    dispatch(addtocartdata('ADDTOCART',data))
  };

  const SingleProduct = (data)=>{
    console.log(data)
    dispatch(productDescriptionAction("PRODUCTDESCRIPTION",data))
    dispatch(similarProductsAction("SIMILARPRODUCT",data?.categoryId))
  }


  return (
    <>
   
      <Card style={{ width: "15rem", hight: "10remt", border: "none" }} >
      <Link to="/ProductDescription">
        <Card.Img
        onClick={()=>{SingleProduct(props.alldata)}}
          style={{ border: "1px solid lightgrey", borderRadius: "14px" }}
          variant="top"
          src={props.image}
          className="cursor-pointer p-4 "
        />
        </Link>
        <Card.Body>
          <Card.Title>{props.brand}</Card.Title>
          <Card.Text>{props.title}</Card.Text>
          <Button
          className="bg-blue-400"
           
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
