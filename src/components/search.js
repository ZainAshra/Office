import React, { useEffect, useState } from "react";
import searchIcon from "../images/Icon (Stroke).png";
  import crossIcon from "../images/crossIcon.png";
import "./Search.css";
import HeaderBootstap from "./mainheader";
import { useDispatch, useSelector } from "react-redux";
import { allproductsdata } from "../redux/actions";

export default function Search() {
  const allproductsdataa = useSelector((state)=>state.allProductsData.ALLPRODUCTSDATA)
  console.log(allproductsdataa)


  const dispatch = useDispatch()
  const [showValue, setshowValue] = useState(true);

  const setValue = (e) => {
    
    setshowValue(e)
    console.log(showValue)
    // if (showValue>2){
    //   dispatch(allproductsdata("ALLPRODUCTSDATA"))
    //   console.log("workinf")
      
    // }
  };
  const clearField = () => {
    console.log("run");
    setshowValue(false);
    console.log(showValue)
  };
  useEffect(()=>{
    dispatch(allproductsdata("ALLPRODUCTSDATA"))

  },[])
  return (<>
    {showValue && (<div className="search-container">
      <div  className="search-wrapper">
        <img src={searchIcon} alt="search" className="search-icon" />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="search-bar"
          onChange={(e) => setValue(e.target.value)}
        />
        <img
          src={crossIcon}
          alt="search"
          className="cross-icon"
          onClick={() => {
            clearField();
          }}
        />
      </div>
    </div>)}
    
    {!showValue && (<div>
      <HeaderBootstap/>
    </div>)}
    </>

  );
}
