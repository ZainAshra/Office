// this component will add after corrasole

import React from "react";
import productimg from "..//images/productimg.png";
import './allcards.css'
const Allcards = () => {

    const styles = {
        saveRsdiv :{
            width: "15rem",
            background: "#009FD1", 
            borderRradius: "16px",
            height: "40px",
            marginTop:"5px",
            alignItem:"centre",
            textAlign:"centre",
        }
    }
  
  return (
    <div className="allcardmaindiv">
      allcards
      <div style={{ 
        backgroundImage: `url(${productimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: "2px solid #E2E8F0",
        borderRradius: "20px",
        width: "15rem",
        height: "15rem",

      }}>
        {/* <img className="productimg" alt="" src={productimg} style={styles.cardsimg} /> */}
        
      </div>
      <div className="saversdiv" style={{background:"#009FD1"}} >
       <p className="container " >save rs ppp</p>
      </div>
    </div>
  );
};

export default Allcards;
