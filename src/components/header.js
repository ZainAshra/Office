import React from "react";
import Search from "../components/search";
import "bootstrap/dist/css/bootstrap.min.css";
// import Search from './search'
import drawer from "../images/drawer.png";
import companylogo from "../images/company_logo.png";
import "./header.css";
import { Button } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <div className="header">
        <div>
          <Search />
        </div>
      </div>

      {/* <div className='Conatiner' >
    <div className='row'>
      <div className='col' id='col1'> 
      <img src={drawer} alt=""/> <img src={companylogo} alt=""/>
      </div>
      <div className='col' id='col2'></div>
      <div className='col' id='col3'> 
        <div class='row'>
          <div col></div>
        </div>
      </div>
    </div>

    </div>
 */}

      <div class="container-fluid">
        <div className="header2" class="row">
          <div class="col ">1 of 3</div>
          <div class="col">Variable width content</div>
          <div class="col">3 of 3</div>
        </div>
      </div>
    </>
  );
}
