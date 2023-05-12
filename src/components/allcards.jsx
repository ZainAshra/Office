// this component will add after corrasole
import "./allcards.css";
import React, { useEffect } from "react";
import { cardsData, categoriesData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import productimg from "..//images/productimg.png";
export const Allcards = (props) => {
  // const categoriesdatafromstore = useSelector((state) => state.categories);

  // useEffect(() => {
  //   dispatch(categoriesData({ type: "CATEGORIES", payload: [] }));
  // }, [categoriesData]);
  console.log("HHHHHHHHHHHHHH");

  return (
    // <div>
    //   <div
    //     className="allcardmaindiv"
    //     style={{
    //       overflow: "auto",
    //       whiteSpace: "nowrap",
    //       border: "2pxsolidred",
    //     }}
    //   >
    //     {/* {console.log(props.minprice,"props")} */}

    //     <div
    //       style={{
    //         backgroundImage: `url(${props.image})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //         border: "2px solid #E2E8F0",
    //         borderRradius: "20px",
    //         width: "15rem",
    //         height: "15rem",
    //       }}
    //     ></div>
    //     <div className="saversdiv" style={{ background: "#009FD1" }}>
    //       <p className="container ">save rs 99</p>
    //     </div>
    //     <p>{props.title}</p>

    //     <div style={{ display: "flex" }}>
    //       <div style={{}}>
    //         <button>Add to cart</button>
    //       </div>
    //       <div style={{}}>
    //         price
    //         <br />
    //         {props.minPrice}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="conatiner">
      <div className="cards"  style={{width:"50px"}}>
        <div className="raw" style={{width:"90px"}}>
          <img style={{width:"150px"}} src={props.image} alt="cardimage" />
        </div>
        <div className="raw">
          <button value={``}>{`Save Rs. 99`}</button>
        </div>

        <div className="raw">
          <h3>{props.title}</h3>
        </div>
        <div className="row">
          <div className="col">
            {" "}
            <button value={``}>{`Add to Cart`}</button>
          </div>
          <div className="col">
            <span>{props.minPrice}</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcards;
