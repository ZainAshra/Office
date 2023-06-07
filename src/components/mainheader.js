import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import {Button, Badge} from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrapheader.css";
import drawer from "../images/drawer.png";
import companylogo from "../images/company_logo.png";
import searchIcon from "../images/search.png";
import whastappicon from "../images/whastapp.png";

// import { Dropdown, NavLink } from "react-bootstrap";
import { useState } from "react";
import Search from "./search";
import { Link } from "react-router-dom";
// import Header from "./Sidemenu";
import Sidemenu from "./Sidemenu";
// import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function HeaderBootstap(props) {
  var cardsCount = useSelector((state) => state.AddToCartReducder);
  var cardsCount = cardsCount.length;
  // console.log(cardsCount, "count");
  // const [showDrawer, s etShowDrawer] = useState(false);
  const [showSearch, setshowSearch] = useState(true);
  const [showmainmenu, setshowmainmenu] = useState(false);

  return (
    <>
      {!showSearch && <Search />}

      {showSearch && (
        <>
          <Navbar className="b_navbar" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#" className="flex flex-row">
                <div className="mt-4 mr-4 ml-1 ">
                  {" "}
                  <img
                    className=""
                    src={drawer}
                    alt="ima"
                    onClick={() => {
                      setshowmainmenu(true);
                    }}
                  />{" "}
                </div>

                <Link to="/">
                  <img src={companylogo} alt="" />
                </Link>
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

                  <NavDropdown
                    title={<span className="text-white ">Karachi</span>}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">Karachi</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Lahore</NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                      Islamabad
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
                </Nav>
                <Form className="d-flex">
                  <div className="conatiner">
                    <div className="row">
                      <div className="col">
                        {" "}
                        <a href="">
                          <img
                            src={searchIcon}
                            alt=""
                            onClick={(e) => {
                              e.preventDefault();
                              setshowSearch(false);
                            }}
                          />
                        </a>
                      </div>
                      <div class="col">
                        <a href="">
                          <img src={whastappicon} alt="" />
                        </a>
                      </div>
                      <div class="col">
                        <Link to="/shoppingCart" className="cart-link">
                          {/* {cardsCount > 0 && (
                          <Badge pill bg="primary" className="cart-badge">
                            <span className="count">{cardsCount}</span>
                          </Badge>
                        )}

                        <FaShoppingCart size={24} className="cart-icon" /> */}

                          <IconButton color="info" aria-label="cart">
                            <StyledBadge
                              badgeContent={cardsCount}
                              color="secondary"
                            >
                              <ShoppingCartIcon />
                            </StyledBadge>
                          </IconButton>
                        </Link>
                      </div>

                      <div class="col">
                        <Link to="/login">
                          <Button
                            className="loginbtn"
                            type="button"
                            variant="outline-success"
                          >
                            Login
                          </Button>
                        </Link>
                      </div>
                      <div class="col">
                        <Link to="signup">
                          <Button id="signupbtn" variant="outline-success">
                            Signup
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div
            className="text-gray-900"
            style={{
              backgroundColor: "#F9A01A",
              weight: "400",
              height: "30px",
              background:
                "linear-gradient(90deg, #F9A01A 1.09%, #F9C21A 21.7%, #F9C21A 77.85%, #F9A01A 100%)",
            }}
          >
            <marquee>Scroll Kro Shop Kro Download The App Now</marquee>
          </div>
        </>
      )}

      {showmainmenu && (
        <div
          className=""
          onMouseLeave={() => {
            setshowmainmenu(false);
          }}
        >
          {" "}
          <Sidemenu />
        </div>
      )}
    </>
  );
}

export default HeaderBootstap;
