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
import copyright from "..//images/copyright.png";
import paymenticon1 from "..//images/paymenticon1.png";
import paymenticon2 from "..//images/paymenticon2.png";
import paymenticon3 from "..//images/paymenticon3.png";
import CopyrightIcon from "@mui/icons-material/Copyright";

import { Button } from "bootstrap";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function Footer() {
  return (
    <>
      <br />
      <br />

      <div className="parent grid bg-blue-950 gap-3 pb-3">
        <br />
        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <div>
              <img src={logofooter} alt="" />
            </div>
          </div>
          <div className="flex flex-row justify-center gap-2 mt-2 mr-2">
            <div>
              <span className="text-gray-100">Social Links</span>
            </div>
            <div>
              <img className="cursor-pointer " src={sociallink1} alt="" />
            </div>
            <div>
              <img className="cursor-pointer" src={sociallink2} alt="" />
            </div>
            <div>
              <img className="cursor-pointer " src={sociallink3} alt="" />
            </div>
            <div>
              <img className="cursor-pointer " src={sociallink4} alt="" />
            </div>
            <div>
              <img className="cursor-pointer " src={sociallink5} alt="" />
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row sm:grid sm:grid-cols-2 gap-2 mr-2 ml-2 mt-4">
          <div className="basis-1/5   md:ml-10 ">
            {" "}
            <div className="container  w-40 justify-start">
              <div className="">Company</div>
              <br />
              <div className="mb-2 text-gray-400 cursor-pointer hover:text-gray-200">
                About Us
              </div>
              <div className="mb-2 text-gray-400 cursor-pointer hover:text-gray-200">
                Privacy Policy
              </div>
              <div className="mb-2 text-gray-400 cursor-pointer hover:text-gray-200">
                Terms & Conditions
              </div>
              <div className="mb-2 text-gray-400 cursor-pointer hover:text-gray-200">
                Shipping policy
              </div>
              <div className="mb-2 text-gray-400 cursor-pointer hover:text-gray-200">
                FAQs
              </div>
            </div>
          </div>
          <div className=" basis-1/5 ">
            <div>Customer Care</div>
            <br />
            <div className="mb-2 text-gray-400 cursor-pointer hover:text-gray-200">
              Return Policy
            </div>
            <div className="mb-2 text-gray-400 cursor-pointer hover:text-gray-200">
              Contact Us
            </div>
            <div className="mb-2 text-gray-400 cursor-pointer hover:text-gray-200">
              Tracking
            </div>
          </div>
          <div className=" basis-1/5 justify-center justify-items-center">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={qrcodeimg} alt="" />
            </div>
          </div>
          <div className="basis-2/5 md:ml-10 sm:ml-3">
            <div className="flex flex-row gap-4">
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.plentys.pk.android&hl=en&gl=US&pli=1">
                  <img className="storeimgbtn" src={pstoreimg} alt="" />
                </a>
              </div>
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.plentys.pk.android&hl=en&gl=US&pli=1">
                  <img className="storeimgbtn" src={astoreimg} alt="" />
                </a>
              </div>
            </div>

            <div className="mt-2 mb-2 sm:text-start">
              <span className="hover:cursor-pointer">Newsletter</span>
            </div>
            <div>
              <div className="bg-gray-100 md:w-80 h-11 sm:w-34 rounded flex flex-row justify-between">
                <div className="text-gray-800">
                  <input
                    className="md:ml-2 sm:ml-1 mt-2 bg-gray-100 sm:w-28 md:w-full text-sm"
                    placeholder="Enter Your Email Address"
                    style={{ outline: "none" }}
                  />
                </div>
                <div className="mt-1 md:mr-1">
                  <button
                    type="button"
                    className="btn text-gray-50 mr-1 bg-blue-600 hover:bg-blue-700 focus:text-black font-bold"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "-10px" }} className="flex flex-row">
              <div>
                <Checkbox
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                  defaultChecked
                  color="default"
                />{" "}
                <span className="text-sm">
                  I agree with Privacy Policy and Terms of Conditions
                </span>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4 text-gray-50">
          <hr className="" style={{ color: "white" }} />
        </div>

        <div className="grid grid-cols-2">
          <div className="flex justify-center">
            <div>
              <img src={paymenticon2} alt="" />
            </div>
            <div>
              <img className="ml-3" src={paymenticon1} alt="" />
            </div>
          </div>
          <div className="flex flex-row justify-center gap-2 mt-2 mr-2">
            <div>
              <span className="text-gray-100">
                <CopyrightIcon />
              </span>
            </div>
            <div className="text-sm mt-1 ">
              2022 - 2023, All rights reserved by Plentys.pk
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
