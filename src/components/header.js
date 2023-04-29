import React, { useEffect, useState } from "react";
import Search from "./search";
import "bootstrap/dist/css/bootstrap.min.css";
// import Search from './search'
import drawer from "../images/drawer.png";
import companylogo from "../images/company_logo.png";
import "./header.css";
import rightIcon from "../images/Icon.png";
import axios from "axios";
import _ from 'lodash';
export default function Header() {
  const [data, setData] = useState([]);
  const [parentData, setParentData] = useState([]);

  const chk = [];

  useEffect(() => {
    axios
      .get("https://api.plentys.pk/api/v1/public/allCategories?cityId=1")

      .then((response) => {
        console.log(response.data.data);
        // setData(response.data.data);
        console.log(response.data.data.length);

        for (let i = 0; i < response.data.data.length; i++) {
          console.log("run");

          chk.push(response.data.data[i]);
          setData(chk);
          // console.log(chk[i].parentId,'array')
        }
      })
      .catch((error) => {
        console.log(error, "api error");
      });
  }, []);

  // const catogries = [
  //   "Plentysmart",
  //   "Beauty & Grooming",
  //   "Home & Lifestyle",
  //   "Women’s Fashion",
  //   "Men’s Fashion",
  //   "Health & Sports",
  //   "Mobile & Tablet",
  //   "Computing",
  //   "Flash Deals",
  // ];

  // console.log(data);
  const groups = _.groupBy(data, 'parentId');
  // console.log(groups)

  const arr = _.map(_.toPairs(groups), ([key, value]) => ({ key, value }));
// console.log(arr)
  arr.map((x,i)=>{
    return(console.log(x.value,i))
  })
  return (
    <>
      <div>
        <img src={drawer} alt="" />

        <div class="container" className="conatiner">
          <h1>Catgories</h1>
          {data.map((item, index) => {
            return (
              <div key={index} class="row" className="row">
                <span>
                  {item.name}
                  <span>
                    <img src={rightIcon} alt="icon" />
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* {console.log(data)} */}
    </>
  );
}
