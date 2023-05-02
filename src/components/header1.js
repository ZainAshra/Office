// import React, { useEffect, useState } from "react";
// import Search from "./search";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Search from './search'
// import drawer from "../images/drawer.png";
// import companylogo from "../images/company_logo.png";
// import "./header.css";
// import rightIcon from "../images/Icon.png";
// import axios from "axios";
// import _ from "lodash";
// export default function Header() {
//   const [data, setData] = useState([]);
//   const [parentData, setParentData] = useState([]);

//   const chk = [];
//   useEffect(() => {
//     axios
//       .get("https://api.plentys.pk/api/v1/public/allCategories?cityId=1")

//       .then((response) => {
//         // console.log(response.data.data);
//         // setData(response.data.data);
//         // console.log(response.data.data.length);

//         for (let i = 0; i < response.data.data.length; i++) {
//           console.log("run");

//           chk.push(response.data.data[i]);
//           setData(chk);
//           // console.log(chk[i].parentId,'array')
//         }
//       })
//       .catch((error) => {
//         console.log(error, "api error");
//       });
//   }, []);

//   // const catogries = [
//   //   "Plentysmart",
//   //   "Beauty & Grooming",
//   //   "Home & Lifestyle",
//   //   "Women’s Fashion",
//   //   "Men’s Fashion",
//   //   "Health & Sports",
//   //   "Mobile & Tablet",
//   //   "Computing",
//   //   "Flash Deals",
//   // ];

//   // console.log(data);
//   const groups = _.groupBy(data, "parentId");
//   // console.log(groups)

//   const arr = _.map(_.toPairs(groups), ([key, value]) => ({ key, value }));
//   // console.log(arr)

//   // for (let i = 0;i<arr.length;i++){
//   //   console.log(arr[i].value[i].name)
//   // }
//   arr.map((x, i) => {
//     return console.log(x.value[i]?.name, i);
//   });
//   return (
//     <>
//       <div>
//         <img src={drawer} alt="" />

//         <div class="container" className="conatiner">
//           <h1>Catgories</h1>

//           {arr.map((x, i) => {
//             return (
//               <>
//                 <div key={i} class="row" className="row">
//                   <span>
//                     {x.value[i].name}
//                     <span>
//                       <img src={rightIcon} alt="icon" />
//                     </span>
//                   </span>
//                 </div>
//               </>
//             );
//           })}
//           {/* {data.map((item, index) => {
//             return (
//               <div key={index} class="row" className="row">
//                 <span>
//                   {item.name}
//                   <span>
//                     <img src={rightIcon} alt="icon" />
//                   </span>
//                 </span>
//               </div>
//             );
//           })} */}
//         </div>
//       </div>

//       {/* {console.log(data)} */}
//     </>
//   );
// }



import React, { useEffect, useState } from "react";
import Search from "./search";
import "bootstrap/dist/css/bootstrap.min.css";
// import Search from './search'
import drawer from "../images/drawer.png";
import companylogo from "../images/company_logo.png";
import "./header.css";
import rightIcon from "../images/Icon.png";
import axios from "axios";
import _ from "lodash";
export default function Header1() {
  const [data, setData] = useState([]);
  const [ChildData, setChildData] = useState([]);
  const [pardata, setPardata] = useState([]);
  const [Subcat, setSubcat] = useState([]);

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

  const getChild = (childid) => {
    // console.log(childid, "childid");

    const child = data.filter((x, i) => x.parentId === childid);
    console.log(child, "child");
    setChildData(child);
  };

  const getnestedChild = (subChild)=>{
const subCategory = data.filter((x,i)=>x.parentId === subChild)
// console.log(subCategory);
setSubcat(subCategory);

  }
  return (
    <>


      <div>
        <img src={drawer} alt="" />

        <div>
          
        </div>

        <div class="container" className="conatiner">
          <h1>Catgories</h1>
          {pardata?.map((item, index) => {
            return (
              <div
                key={index}
                class="row"
                className="row"
                onClick={() => getChild(pardata[index]?.childId)}
              >
                <ul>
                 <li> {pardata[index].name}</li>

                  <>
                    <img src={rightIcon} alt="icon" />
                  </>
                </ul>
              </div>
            );
          })}
          <h1>Child</h1>
          {ChildData?.map((e, i) => {
            return <div ><ul><li onClick={() => getnestedChild(ChildData[i]?.childId)} >{e?.name}</li></ul></div>;
          })}
        </div>
        <div style={{color:'royalblue'}}>
        <h1>subCategory</h1>
        {Subcat?.map((x,i)=>{
            return(<h2> {x?.name}</h2>)
        })}</div>
      </div>
    </>
  );
}
