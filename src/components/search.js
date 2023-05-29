import React, { useEffect, useState } from "react";
import searchIcon from "../images/Icon (Stroke).png";
import crossIcon from "../images/crossIcon.png";
import "./Search.css";
import HeaderBootstap from "./mainheader";
import { useDispatch, useSelector } from "react-redux";
import { allproductsdata, choiseCat } from "../redux/actions";
import { Link } from "react-router-dom";
import { FixedSizeList } from "react-window";

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
  // console.log(searchresult, "result");

  const getcategoryId = (id) => {
    dispatch(choiseCat(id, "CHOISECAT"));
  };

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
        </div>
      )}
      {searchresult && (
        <div className="retlative h-30 w-max border bg-red-800 z-40">
          <div
            className=" rounded border  text-gray-950 text-sm  bg-gray-100 absolute md:left-65 lg:left-64  sm:left-5 sm:text-sm "
            style={{ zIndex: "100", height: searchresult.length > 7 ? "15rem" : "auto", overflowY: "auto"}}
          >
            {searchresult.map((x, i) => (
              <div>
                <ul key={i}>
                  <Link to="/choisecat">
                    <li
                      onClick={() => {
                        getcategoryId(x?.categoryId);
                      }}
                      className="p-1 cursor-pointer hover:bg-gray-300 hover:font-bold hover:p-2 a  "
                    >
                  
                      {x.title}
                    </li>

                    <hr />
                  </Link>
                </ul>
              </div>
            ))}
          </div>
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
