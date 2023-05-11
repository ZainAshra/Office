// this component will add after corrasole

import React from "react";
import productimg from "..//images/productimg.png";
import { useEffect } from "react";
import { categoriesData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./allcards.css";
const Allcards = () => {
  const dispatch = useDispatch();
  const categoriesdatafromreducer = useSelector((state) => state.categories);
const allcardscategoriesdatafromstore = useSelector((state)=>state.Allcards)
console.log(allcardscategoriesdatafromstore)
//all categoriesapi
  useEffect(() => {
    
    dispatch(categoriesData({ type: "CATEGORIES", payload: [] }));
  }, [categoriesData]);
  console.log(categoriesdatafromreducer,"all categories");




//home and life style
useEffect(()=>{

  
})


  // const styles = {
  //   saveRsdiv: {
  //     width: "15rem",
  //     background: "#009FD1",
  //     borderRradius: "16px",
  //     height: "40px",
  //     marginTop: "5px",
  //     alignItem: "centre",
  //     textAlign: "centre",
  //   },
  // };

  return (
    <div className="allcardmaindiv">
      allcards
      <div
        style={{
          backgroundImage: `url(${productimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "2px solid #E2E8F0",
          borderRradius: "20px",
          width: "15rem",
          height: "15rem",
        }}
      >
      </div>
      <div className="saversdiv" style={{ background: "#009FD1" }}>
        <p className="container ">save rs ppp</p>
      </div>
      <p>title</p>
      <p>text</p>
      <div class="rating">
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
      </div>
    </div>
  );
};

export default Allcards;
