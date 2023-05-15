// this component will add after corrasole
import { Button, Card } from "react-bootstrap";
import "./allcards.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtocartdata } from "../redux/actions";

export const Allcards = (props) => {
  const dispatch = useDispatch();
  // const [CartCount, setCartCount] = useState(1);
  // const [addedItems, setaddedItems] = useState();

  // const AddToCart = (itemsdetail) => {

  //   setaddedItems(...addedItems,itemsdetail)

  //   setaddedItems(itemsdetail);
  //   console.log("itemsss", addedItems);

  //   setCartCount(CartCount + 1);
  //   console.log(CartCount)
  // };
  // console.log("hhhhhhh");


  return (
    <>
      <Card style={{ width: "15rem", hight: "10remt", border: "none" }}>
        <Card.Img
          style={{ border: "1px solid lightgrey", borderRadius: "5px" }}
          variant="top"
          src={props.image}
        />
        <Card.Body>
          <Card.Title>{props.brand}</Card.Title>
          <Card.Text>{props.title}</Card.Text>
          <Button
            onClick={() => dispatch(addtocartdata("ADDTOCART",props.alldata))}
            variant="primary"
          >
            Add To Cart
          </Button>
          {/* <Button
            onClick={() => AddToCart([props.alldata])}
            variant="primary"
          >
            Add To Cart
          </Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

export default Allcards;
