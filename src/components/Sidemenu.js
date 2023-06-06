import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import axios from "axios";
import _ from "lodash";
import arrowIcon from "../images/Icon.png";
import "./design.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { choiseCat } from "../redux/actions";
import { List } from "@mui/material";

export default function Sidemenu() {
  const [data, setData] = useState([]);
  const [ChildData, setChildData] = useState([]);
  const [pardata, setPardata] = useState([]);
  const [Subcat, setSubcat] = useState([]);
  const [ShowData, setShowData] = useState(false);
  const [removeChilds, setremoveChilds] = useState(true);
  const [removeNestedChild, setremoveNestedChild] = useState(true);

  const chk = [];

  const getData = () => {
    axios
      .get("https://api.plentys.pk/api/v1/public/allCategories?cityId=1")

      .then((response) => {
        // console.log(response.data.data.length);

        for (let i = 0; i < response.data.data.length; i++) {
          // console.log("run");

          chk.push(response.data.data[i]);

          const groups = _.groupBy(chk, "parentId");
          // console.log(groups);
          const arr = _.map(_.toPairs(groups), ([key, value]) => ({
            key,
            value,
          }));
          setPardata(arr[0]?.value);
        }
        setData(chk);
      })
      .catch((error) => {
        console.log(error, "api error");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data, "data");

  const foo = (childid) => {
    // console.log(childid, "childid");
    setremoveChilds(true);

    const child = data.filter((x, i) => x.parentId === childid);
    // console.log(child, "child");
    setChildData(child);
    setShowData(true);
  };

  const subCategory = (subChild) => {
    
    const subCategory = data.filter((x, i) => x.parentId === subChild);
    // console.log(subCategory, "subcat");
    setSubcat(subCategory);
    setremoveNestedChild(true);
  };

  const dispatch = useDispatch()
    const getchildID=(id)=>{
       
        dispatch(choiseCat(id,"CHOISECAT"))
    }
  return (
    <>
      <div className="bodydiv " style={{zIndex:"10",position:'absolute',backgroundColor:"rgba(0,0,0,0.7)",width:"100%"}}>
        <div className="maindiv">
          <h1 className="heading">Catgories</h1>
          {pardata?.map((item, index) => {
            return (
              <ul
                onMouseEnter={() => foo(pardata[index]?.childId)}
                onMouseLeave={() => setremoveNestedChild(false)}
                key={index}
                className="child cursor-pointer"
              >
              <Link to="/choisecat">
                <li onClick={()=>{getchildID(pardata[index]?.childId)}} className="childlink">{`${pardata[index].name}`}</li>
                </Link>
                <li className="">
                  <img src={arrowIcon} alt="" />
                </li>
              </ul>
            );
          })}
        </div>
        {removeChilds && ShowData && ChildData[0] && (
          <div
            onMouseLeave={() => setremoveChilds(false)}
            className="categorydiv"
          >
            {ChildData?.map((e, i) => {
              return (
                <ul
                  className="child"
                  onMouseEnter={() => subCategory(ChildData[i]?.childId)}
                  
                >
       
                  <li onClick={()=>{getchildID(ChildData[i]?.childId)}} className="childlink">{e?.name}</li>
                  {Subcat[0] && (
                    <li>
                      <img src={arrowIcon} alt="" />
                    </li>
                  )}
                </ul>
              );
            })}
          </div>
        )}

        {removeNestedChild && Subcat && Subcat[0] && (
          <div
            onMouseEnter={() => {
              setremoveChilds(true);
            }}
            onMouseLeave={() => setremoveNestedChild(false)}
            className="nestedcategory "
            style={{ color: "royalblue" }}
          >
            {Subcat?.map((x, i) => {
              return (
                <ul className="child">
                  <li   className="childlink">{x?.name}</li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
