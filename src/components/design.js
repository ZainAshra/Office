import React from "react";
import "./design.css";
import arrowIcon from "../images/Icon.png";
export default function Design() {
  const c = ["name", "fname", "age", "designation"];
  return (
    <>
      <div className="maindiv">
        <h1 className="heading">Categories</h1>
        {/* {pardata?.map((item, index) => {
          return (
            <ul
              onClick={() => foo(pardata[index]?.childId)}
              key={index}
              className="child"
            >
              <li className="childlink">{pardata[index].name}</li>
              <li className="">
                <img src={arrowIcon} alt="" />
              </li>
            </ul>
          );
        })} */}

        <ul className="child">
          <li className="childlink">sasa</li>
          <li className="">
            <img src={arrowIcon} alt="" />
          </li>
        </ul>
        <ul className="child">
          <li className="childlink">sasa</li>
          <li className="">
            <img src={arrowIcon} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
