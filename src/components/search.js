import React, { useEffect, useState } from "react";
import searchIcon from "../images/Icon (Stroke).png";
import crossIcon from "../images/crossIcon.png";
import "./Search.css";
import HeaderBootstap from "./mainheader";
import { useDispatch, useSelector } from "react-redux";
import { allproductsdata } from "../redux/actions";
import { toLower } from "lodash";
import _ from "lodash";

export default function Search() {
  const allproductsdataa = useSelector(
    (state) => state.allProductsData.ALLPRODUCTSDATA
  );


  const dispatch = useDispatch();
  const [showValue, setshowValue] = useState(true);
  const [userdata, setuserdata] = useState("");
  const [searchresult, setSearchresult] = useState([]);

  const setValue = (e) => {
    var a = e.toLowerCase();
    setshowValue(a);
    setuserdata(a);
  };

  const clearField = () => {
    setuserdata("");
    setshowValue(false);
  };
  useEffect(() => {
    dispatch(allproductsdata("ALLPRODUCTSDATA"));
  }, []);

  useEffect(() => {
    if (userdata?.length > 1) {
      const filtereddata = allproductsdataa?.filter((x) =>
        x?.title.toLowerCase().includes(userdata.toLowerCase())
      );
      setSearchresult(filtereddata);
    } else {
      setSearchresult([]);
    }
  }, [userdata]);
  console.log(searchresult, "result");

  return (
    <>
      {showValue && (
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
          {/* 
      {searchresult?.length >0 && (

        <div className="text-gray-800 border bg-red-600">
        <ul>
<li>sd</li>
        </ul>

        </div>
      )} */}
        </div>
      )}
      {searchresult && (
        <div
          className=" border bg-gray-300 text-gray-950"
          style={{ position: "absolute", top: "20px" ,}}
        >
         {searchresult.map((x,i)=><ul>
          <li className="border-2 cursor-pointer ">{x.title}</li>
         </ul>)}
        </div>
      )}

      {!showValue && (
        <div>
          <HeaderBootstap />
        </div>
      )}
    </>
  );
}
