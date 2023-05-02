import React, { useEffect, useState } from "react";
import Search from "./search";
import "bootstrap/dist/css/bootstrap.min.css";
// import Search from './search'
import drawer from "../images/drawer.png";
// import companylogo from "../images/company_logo.png";
import "./header.css";
// import rightIcon from "../images/Icon.png";
import axios from "axios";
import _ from "lodash";
import arrowIcon from "../images/Icon.png";
import "./design.css";

export default function Header() {
  const [data, setData] = useState([]);
  const [ChildData, setChildData] = useState([]);
  const [pardata, setPardata] = useState([]);
  const [Subcat, setSubcat] = useState([]);
const [ShowData,setShowData]= useState(false)
const[nesteddata,setnesteddata]=useState(false)
  const chk = [];

  const getData = () => {
    axios
      .get("https://api.plentys.pk/api/v1/public/allCategories?cityId=1")

      .then((response) => {
        console.log(response.data.data.length);

        for (let i = 0; i < response.data.data.length; i++) {
          console.log("run");

          chk.push(response.data.data[i]);

          const groups = _.groupBy(chk, "parentId");
          console.log(groups);
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

  console.log(data, "data");

  const foo = (childid) => {
    console.log(childid, "childid");

    const child = data.filter((x, i) => x.parentId === childid);
    console.log(child, "child");
    setChildData(child);
    setShowData(true)
  };

  const subCategory = (subChild) => {
    const subCategory = data.filter((x, i) => x.parentId === subChild);
    console.log(subCategory,'subcat');
    setSubcat(subCategory);
  };
  return (
    <>
      <div className="bodydiv">
        <div className="maindiv">
          <h1 className="heading">Catgories</h1>
          {pardata?.map((item, index) => {
            return (
              <ul
                onMouseEnter={() => foo(pardata[index]?.childId)}
                key={index}
                className="child"
              >
                <li className="childlink">{pardata[index].name}</li>
                <li className="">
                  <img src={arrowIcon} alt="" />
                </li>
              </ul>
            );
          })}
        </div>
        {ShowData && ChildData[0] && (<div className="categorydiv">
            
            {ChildData?.map((e, i) => {
              return (
                
                  <ul className="child" onMouseEnter={() => subCategory(ChildData[i]?.childId)}>
                    <li className="childlink">
                      {e?.name}
                    </li>
                    <li><img src={arrowIcon} alt="" /></li>
                  </ul>
                
              );
            })}
          </div>)}
        
       {Subcat && Subcat[0] && (
        <div className="nestedcategory " style={{ color: "royalblue" }}>
          
          {Subcat?.map((x, i) => {
            return <ul className="child"> 
            <li className="childlink">
            {x?.name}
            </li>
           </ul>;
          })}
        </div>
       )} 
       
      </div>
    </>
  );
}
