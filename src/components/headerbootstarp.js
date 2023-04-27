import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import {Button, Badge} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrapheader.css";
import drawer from "../images/drawer.png";
import companylogo from "../images/company_logo.png";
import searchIcon from "../images/search.png";
import whastappicon from "../images/whastapp.png";
import cart from "../images/cart.png";
import { Dropdown, NavLink } from "react-bootstrap";
import { useState } from "react";



function HeaderBootstap() {
  // import drawer from '../images/crossIcon.png'

  const[showDrawer ,setShowDrawer]= useState(false);
  const [showSearch,setshowSearch]= useState(false);



  function funShowSearch(){
    setshowSearch(true)
  }
  function funhideSearch(){
    setshowSearch(false)
  }
  function funShowDrawer(){
    setShowDrawer(true)
  } function funhideDrawer(){
    setShowDrawer(false)
  }

  return (

<>
   <div>
    {showDrawer &&(
      <div>
        <Dropdown>
          <h1>zain</h1>
        </Dropdown>
      </div>
    )}
   </div>
  {!showSearch && (
    <Navbar className="b_navbar  " expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={drawer} alt=""  onMouseEnter={funShowDrawer} onMouseLeave={funhideDrawer}/> <img src={companylogo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="headerwords" href="">
              Flash Deals
            </Nav.Link>
            {/* <Nav.Link className="headerwords" href="">Link</Nav.Link> */}
            <NavDropdown
              title={<span className="text-white ">Karachi</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Karachi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lahore</NavDropdown.Item>

              <NavDropdown.Item href="#action5">Islamabad</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <div class="conatiner">
              <div class="row">
                <div class="col">
                  {" "}
                  <a href="">
                    <img src={searchIcon} alt=""  onClick={funShowSearch} />
                  </a>
                </div>
                <div class="col">
                  <a href="">
                    <img src={whastappicon} alt="" />
                  </a>
                </div>
                <div class="col">
                  <a href="">
                    {" "}
                    <img src={cart} alt="" />
                  </a>
                </div>

                <div class="col">
                  <Button
                    className="loginbtn"
                    type="button"
                    variant="outline-success"
                  >
                    Login
                  </Button>
                </div>
                <div class="col">
                  <Button id="signupbtn" variant="outline-success">
                    Signup
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )}  
    </>
  );
}

export default HeaderBootstap;
