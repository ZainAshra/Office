import React from "react";
import HeaderBootstap from "./mainheader";
import "./section.css";
import bagimg from "../images/bag.png";
import bagimg2 from "../images/bag2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import sloganimg from '../images/slogan.png'
import downarrowimg from '../images/downarrow.png'
import pstoreimg from "../images/Playstore.png"
import astoreimg from "../images/App Store.png"
import Slider from './slider'
export default function Main() {
  return (
    <>
      <HeaderBootstap />

      <div className="afterheader">
        <div className="sideimage">
          <div className="imgdiv">
            <img alt="" src={bagimg} className="img" />
          </div>
        </div>

        <div className="text">
          <div className="slogan">
            <img src={sloganimg} alt=""/>
          </div>
          <div className="arowimg">
            <img src={downarrowimg} alt=''/>
          </div>
          <div className="btnimg">
          <div> <a href="https://play.google.com/store/apps/details?id=com.plentys.pk.android&hl=en&gl=US&pli=1"><img className="storeimgbtn" src={pstoreimg} alt=''/></a></div>
          <div> <img className="storeimgbtn"  src={astoreimg} alt=''/></div>
          </div>
        </div>
        <div className="sideimage">
          <div className="imgdiv">
            <img alt="" src={bagimg2} className="img" />
          </div>
        </div>
      </div>

<div className="slider">
      <Slider/>
      </div>
    </>
  );
}
