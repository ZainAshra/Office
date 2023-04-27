import React, { useState } from "react";
import searchIcon from "../images/Icon (Stroke).png";
  import crossIcon from "../images/crossIcon.png";
import "./Search.css";

export default function Search() {
  const [showValue, setshowValue] = useState(false);

  const setValue = (e) => {
    
    setshowValue(e)
    console.log(showValue)
  };
  const clearField = () => {
    console.log("run");
    setshowValue(false);
    console.log(showValue)
  };
  return (
    <div className="search-container">
      <div className="search-wrapper">
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
    </div>
  );
}
