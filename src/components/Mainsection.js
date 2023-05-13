import React, { useEffect } from "react";
import HeaderBootstap from "./mainheader";
import "./section.css";
import bagimg from "../images/bag.png";
import bagimg2 from "../images/bag2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import sloganimg from "../images/slogan.png";
import downarrowimg from "../images/downarrow.png";
import pstoreimg from "../images/Playstore.png";
import astoreimg from "../images/App Store.png";
import Slider from "./slider";
import Footer from "./footer.jsx";
import Allcards from "./allcards";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { allcardsData } from "../redux/reducers/allcardsDataReducer";
import { cardsData } from "../redux/actions";
import styles from "./allcards.css";
import { Col, Row } from "react-bootstrap";
import { Height } from "@mui/icons-material";

const cat = [
  "product",
  "product",
  "product",
  "product",
  "product",
  "product",
  "product",
  "product",
  "product",
  "product",
];

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  do {
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  } while (color === "#FFFFFF"); // exclude white color
  return color;
};

export default function Main() {
  const dispatch = useDispatch();

  const allCardsDataObject = useSelector((state) => state.allcardsData);

  // const arr = _.map(_.toPairs(allCardsDataObject), ([key, value]) => ({
  //   key,
  //   value,
  // }));

  useEffect(() => {
    const promise1 = dispatch(cardsData(1955, "WHOLESALE"));
    const promise2 = dispatch(cardsData(1949, "PLENTYSMART"));
    const promise3 = dispatch(cardsData(5, "BEAUTYANDGROOMING"));

    Promise.all([promise1, promise2, promise3]);
  }, []);

  return (
    <>
      <HeaderBootstap />
      {/* after header section */}
      <div className="afterheader">
        <div className="sideimage">
          <div className="imgdiv">
            <img alt="" src={bagimg} className="img" />
          </div>
        </div>

        <div className="text">
          <div className="slogan">
            <img src={sloganimg} alt="" />
          </div>
          <div className="arowimg">
            <img src={downarrowimg} alt="" />
          </div>
          <div className="btnimg">
            <div>
              {" "}
              <a href="https://play.google.com/store/apps/details?id=com.plentys.pk.android&hl=en&gl=US&pli=1">
                <img className="storeimgbtn" src={pstoreimg} alt="" />
              </a>
            </div>
            <div>
              {" "}
              <img className="storeimgbtn" src={astoreimg} alt="" />
            </div>
          </div>
        </div>
        <div className="sideimage">
          <div className="imgdiv">
            <img alt="" src={bagimg2} className="img" />
          </div>
        </div>
      </div>

      {/* //Slider/courasel */}
      <div className="slider">
        <Slider />
      </div>

      {/* all Catgories cards */}
      <div>
        <h1 className="catheading">Shop Our Top Catgories</h1>
      </div>

      <div className="catcardsparent" style={{ color: "blue" }}>
        {cat.map((e, i) => {
          return (
            <div
              className="catcarddiv"
              style={{ backgroundColor: getRandomColor(), margin: "10px" }}
              key={i}
            >
              <h3>{e}</h3>
            </div>
          );
        })}
      </div>

      {/* allcards */}
      {Object.keys(allCardsDataObject).map((dt) => {
        return (
          <div>
            <h1
              style={{
                color: "black",
              }}
            >
              {dt}
            </h1>
            <div
              className="fancyscroll"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                border: "1px solid black",
                overflow: "auto",
                marginBottom: "10px",
                overflowX: "scroll",
              }}
            >
              {allCardsDataObject[dt].map((data) => {
                return (
                  <div
                    style={{
                      padding: "3px",
                      margin: "2px",
                    }}
                  >
                    <Allcards
                      title={data.title}
                      image={data.imageUrl}
                      minPrice={data.minPrice}
                      brand={data.brand}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <Footer />
    </>
  );
}
