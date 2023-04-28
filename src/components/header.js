import React, { useEffect, useState } from "react";
import Search from "./search";
import "bootstrap/dist/css/bootstrap.min.css";
// import Search from './search'
import drawer from "../images/drawer.png";
import companylogo from "../images/company_logo.png";
import "./header.css";
import rightIcon from '../images/Icon.png'
import axios from 'axios';
import { Category, CleaningServices } from "@mui/icons-material";
export default function Header() {


const [data ,setData]=useState('');


useEffect(()=>{
axios.get('https://api.plentys.pk/api/v1/public/allCategories?cityId=1')

.then(response=>{
   console.log(response.data)
  setData(response.data)

})
.catch(error=>{
console.log(error,'api error')
})



},[])


  const catogries = [
    "Plentysmart",
    "Beauty & Grooming",
    "Home & Lifestyle",
    "Women’s Fashion",
    "Men’s Fashion",
    "Health & Sports",
    "Mobile & Tablet",
    "Computing",
    "Flash Deals",
  ];
  const cat=data.data;

  cat.forEach((element)=>{
    console.log(element.name)
  })

  return (
    <>




<div>
 {/* {cat.map((e,i)=>{
return(<p>{e.name}</p>)
 })} */}
</div>
   
<div>


<img src={drawer} alt=""  />

          <div class="container" className="conatiner">
          <h1>Catgories</h1>
          {catogries.map((item,index)=>{return <div key={index} class='row' className="row">
              <span >{item} <span><img src={rightIcon} alt='icon'/></span></span>
            </div>
})}
           
          </div>
        </div>

{/* {console.log(data)} */}

      </>
  );
}
