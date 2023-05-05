import React from "react";
import "./footer.css";
import logofooter from "..//images/Logofooter.png";
import sociallink1 from "..//images/socialicon1.png";
import sociallink2 from "..//images/socialicon2.png";
import sociallink3 from "..//images/sociallink3.png";
import sociallink5 from "..//images/socialicon5.png";
import sociallink4 from "..//images/socialicon4.png";
import qrcodeimg from "..//images/QrCode.png";
import pstoreimg from "../images/Playstore.png";
import astoreimg from "..//images/App Store.png";
import copyright from "..//images/copyright.png"
import paymenticon1 from "..//images/paymenticon1.png"
import paymenticon2 from "..//images/paymenticon2.png"
import paymenticon3 from "..//images/paymenticon3.png"

import { Button } from "bootstrap";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
export default function footer() {
  return (
    <>
      <br />
      <footer id="footer">
        <div className="div1 container">
          <div className="div1a conatiner">
            <img src={logofooter} alt="" />
          </div>
          <div className="div1b ">
            <span style={{ marginRight: "30px" }}>Social Links</span>
            <a href="">
              <img src={sociallink1} alt="" />
            </a>
            <a href="">
              <img src={sociallink2} alt="" />
            </a>
            <a href="">
              <img src={sociallink3} alt="" />
            </a>
            <a href="">
              <img src={sociallink4} alt="" />
            </a>
            <a href="">
              <img src={sociallink5} alt="" />
            </a>
          </div>
        </div>

        <div className="div2 container">
          <div className="row">
            <div className="col-2">
              <div className="conatiner">
                <div className="row" style={{ color: "white" }}>
                  {" "}
                  Company
                </div>
                <div className="row footertextp"> About US</div>
                <div className="row footertextp"> policy</div>
                <div className="row footertextp"> Terms and Conditions</div>
                <div className="row footertextp">Shopping Policy </div>
                <div className="row footertextp"> FAQs</div>
              </div>
            </div>

            <div className="col-2">
              <div className="conatiner">
                <div className="row" style={{ color: "white" }}>
                  Customer Care
                </div>
                <div className="row footertextp"> Return Policy</div>
                <div className="row footertextp"> Contact Us</div>
                <div className="row footertextp">Tracking </div>
              </div>
            </div>

            <div className="col-2">
              <div className="col">
                <div className="conatiner">
                  <div className="row" style={{ color: "white" }}>
                    {" "}
                    Sell With Us
                  </div>
                  <div className="row footertextp"> Become Vendor</div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <img src={qrcodeimg} alt="" />
            </div>

            <div className="col-4">
              <div className="conatiner" >
                <div className="row footertextp footerbtn">
                  <div className="">
                    <a href="https://play.google.com/store/apps/details?id=com.plentys.pk.android&hl=en&gl=US&pli=1">
                      <img className="storeimgbtn" src={pstoreimg} alt="" />
                    </a>
                  </div>
                  <div className="">
                    <a href="https://play.google.com/store/apps/details?id=com.plentys.pk.android&hl=en&gl=US&pli=1">
                      <img className="storeimgbtn" src={astoreimg} alt="" />
                    </a>
                  </div>
                </div>
                <div className="row footertextp" ><br/> <p style={{margingRight:"30px"}}>Newletter</p><br/></div>
                <div className="row footertextp footersearch">
                  <div className="search-container">
                    <div className="search-wrapper">
                      <input

                        type="text"
                        placeholder="Enter Your Email Here?"
                        className="search-bar"
                      />
                      <button type="button" class="btn btn-primary">search</button>
                    </div>
                  </div>
                </div>
                <div className="row footertextp">
                <div className="col-2" style={{marginLeft:"60px",marginTop:"30px"}}> <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="" />
               
                </FormGroup></div>

                <div className=" col" style={{marginLeft:"85px",marginTop:"-30px" }}> 

                </div>
                
                 </div>
               
              </div>
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <br/>
        <div className="container" style={{borderTop:"1px solid white"}}>
        <br/>
          <div className="row">
            <div className="col-3"> 
            <img className="paymenticon" src={paymenticon1} alt=""/>
            <img className="paymenticon" src={paymenticon2} alt=""/>
            <img className="paymenticon" src={paymenticon3} alt=""/></div>
            <div className="col-4">
           


            </div>
            <div className="col-5 copyright" ><img src={copyright} alt=""/><span className="copyrighttext" >2022 - 2023, All rights reserved by Plentys.pk</span></div>
          </div>
        </div>
        <br/>
      </footer>
    </>
  );
}
