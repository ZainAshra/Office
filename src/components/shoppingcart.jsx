import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderBootstap from "./mainheader";
import { Button, Container } from "react-bootstrap";
import crossIcon from "../images/cross icon.png";
import { addtocartdata } from "../redux/actions";
import { cardsCount } from "../redux/actions";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import _ from "lodash";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [cardsCount, setCardsCount] = useState(0);
  const [cardsdata, setcardsdata] = useState([]);
  const [totalbill, settotalBill] = useState(0);
  const allSelectedCards = useSelector((state) => state.AddToCartReducder);
  const [btnbackground,setbtnbackground] = useState(false)

  const arr = [];

  function sum() {
    for (var i = 0; i <= allSelectedCards?.length; i++) {
      if (allSelectedCards[i]?.minPrice > 0) {
        arr.push(allSelectedCards[i]?.minPrice);
      }
    }
    const sum = _.sum(arr);
    settotalBill(sum);
  }


  const handleClick = ()=>{
    setbtnbackground("yellow")
  }
  useEffect(() => {
    sum();
    console.log(arr);
  }, [allSelectedCards]);

  console.log(arr);
  const removeAll = (e) => {
    setcardsdata([]);
    setCardsCount(0);
    dispatch(addtocartdata("REMOVEALL", []));
    sum();
  };

  useEffect(() => {
    setcardsdata(allSelectedCards);
    setCardsCount(allSelectedCards.length);

    // dispatch(addtocartdata("REMOVESINGLECART", cardsdata));
  }, []);

  const removeCart = (productid) => {
    const updatedItems = allSelectedCards.filter(
      (cardsdata) => cardsdata?.productId !== productid
    );
    sum();
    setcardsdata(updatedItems);
    setCardsCount(allSelectedCards?.length);

    // setcardsdata(updatedItems);
    dispatch(addtocartdata("REMOVEITEM", updatedItems));
  };
  setTimeout(() => {
    setCardsCount(allSelectedCards?.length);
  }, 2000);

  return (
    <>
      <HeaderBootstap
        cardsCount={cardsCount}
        className="sticky-top"
        style={{
          position: "sticky",
        }}
      />

      {allSelectedCards.length > 0 && (
        <div style={{ color: "black" }} className="mainContent">
          <div className=" ">
            <div className=" flex md:flex-col lg:flex-row sm:flex-col pr-4 mr-md-2 mr-sm-0">
              <div className=" w-100" style={{ backgroundColor: "royalbrown" }}>
                <div className="row">
                  <div className="col-12">
                    <h1 className="m-2 font-bold text-4xl text-blue-900 italic">
                      Shopping Cart
                    </h1>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                      <Button
                        onClick={(e) => removeAll()}
                        className="bg-danger m-1"
                      >
                        {" "}
                        Remove All
                      </Button>
                    </div>
                  </div>
                  <div className="container-fluid r">
                    <div className="row  p-3">
                      <div className="col-5  p-3">
                        <span>FBP</span>
                      </div>
                      <div className="col-2 p-3">
                        <span style={{ marginLeft: "3rem" }}>Quantity</span>
                      </div>
                      <div className="col-2 p-3">
                        <span style={{ marginLeft: "2rem" }}>Shipping</span>
                      </div>
                      <div className="col-1 p-3">
                        <span>Price</span>
                      </div>
                      <div className="col-1  p-3">
                        <span></span>
                      </div>
                      <hr />

                      <div
                        className="md-3 conatiner justify-content-center"
                        style={{}}
                      >
                        {allSelectedCards.map((x, i) => {
                          return (
                            <>
                              {x && (
                                <div
                                  className="row"
                                  style={{ height: "15rem" }}
                                >
                                  <div className="col-5  justify-content-center">
                                    <div className="container">
                                      <div className="row" style={{}}>
                                        <div
                                          className="col-5 d-flex justify-content-center"
                                          style={{}}
                                        >
                                          <a href="">
                                            <img
                                              style={{ height: "9rem" }}
                                              src={x?.imageUrl}
                                              alt=""
                                            ></img>
                                          </a>
                                        </div>
                                        <div className="col-7  justify-content-center">
                                          <div className="col-12  justify-content-center">
                                            <h5
                                              style={{ marginBottom: "2rem" }}
                                            >
                                              {x?.title}
                                            </h5>
                                          </div>
                                          <div className="col-12">
                                            <h6
                                              style={{
                                                color: "rgb(40, 73, 117)",
                                                margin: "2px",
                                              }}
                                            >
                                              SKU: {x?.sku}
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-2 mt-5 d-flex justify-content-center">
                                    <form>
                                      <div className="input-group ">
                                        <div className="input-group-prepend">
                                          <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                          >
                                            -
                                          </button>
                                        </div>
                                        <input
                                          type="text"
                                          className="form-control input-sm text-center"
                                          value="1"
                                        />
                                        <div className="input-group-append">
                                          <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>

                                  <div className="col-3  justify-content-center">
                                    <div className="row">
                                      <div className="col-6">
                                        <div className="d-flex justify-content-center my-4 row mt-5 ml-1">
                                          <strong
                                            style={{
                                              color: "rgb(40, 73, 117)",
                                              fontSize: "18px",
                                              marginLeft: "4.5rem",
                                            }}
                                          >
                                            {" "}
                                            Free
                                          </strong>
                                        </div>
                                      </div>
                                      <div className="col-6 mt-5 ">
                                        <p
                                          className="text-muted"
                                          style={{ marginLeft: "4rem" }}
                                        >
                                          <del>{x.minPrice + 200}</del>
                                          <br /> {x?.minPrice}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-2 d-flex justify-content-center">
                                    <div className="justify-content-center mt-4">
                                      <img
                                        onClick={() => removeCart(x?.productId)}
                                        width="100"
                                        src={crossIcon}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <hr />
                                </div>
                              )}
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid rounded-lg md:basis-1/3 lg:basis-1/3 sm:grid-cols-1  lg:mt-25 md:mt-20 border ml-5 h-40">
                <div
                  className=" rounded-lg"
                  style={{ backgroundColor: "#0B223F", color: "white" }}
                >
                  <div>
                    {" "}
                    <h1 className="font-bold text-2xl mt-1 p-1">
                      Payment Summary
                    </h1>
                  </div>
                  <br />

                  <div className="container">
                    <hr />
                  </div>
                  <div className="flex flex-row justify-between mt-2">
                    <div className="ml-2">
                      {" "}
                      <p>item {cardsCount}</p>
                    </div>
                    <div className="mr-2">
                      {" "}
                      <p>{totalbill}</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-3">
                    <div className="ml-2">
                      {" "}
                      <p>
                        Shipping to<p>karachi</p>{" "}
                      </p>
                    </div>

                    <div className="mr-2">
                      <p>49</p>
                    </div>
                  </div>
                  <div className="container">
                    <hr />
                  </div>
                  <div className="flex flex-row justify-between mt-3">
                    <div className="ml-2">
                      {" "}
                      <p>Total To Pay </p>
                    </div>
                    <div className="mr-2">
                      {" "}
                      <p>{totalbill + 49}</p>
                    </div>
                  </div>
                  <div className="m-auto flex justify-center mt-4">
                    <div className="w-90">
                      <Button
                        variant="warning"
                        className="lg:w-60 sm:w-80 bg-yellow-400 text-bold text-gray-100"
                      >
                        Place order
                      </Button>
                    </div>
                  </div>
                  <div className="mt-6"></div>
                </div>

                {/* checkoutl */}

                <div
                  className="mt-8 rounded-lg grid gap-2 "
                  style={{ backgroundColor: "#0B223F", color: "white" }}
                >
                  <div>
                    <h1 className="font-bold text-2xl mt-1 p-1">Check Out</h1>
                  </div>
                  <div className="container">
                    {" "}
                    <hr />{" "}
                  </div>
                  <div className="ml-2 flex flex-raw justify-between">
                    <div>
                      {" "}
                      <h2 className="text-2xl">Delivery Address</h2>
                    </div>
                    <div className="mr-2">
                      {" "}
                      <AutorenewIcon />
                    </div>
                  </div>
                  <div className="flex ml-2 mt-3">
                    <div className="mr-1">
                      <HomeIcon />
                    </div>
                    <div>
                      <p>
                        house # 2, street 3 , Bihar Muslim Cooperative Housing
                        Society,Bahadurabad,Karachi Sindh Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="mr-1">
                      <CallIcon />
                    </div>
                    <div>
                      <p>12334444</p>
                    </div>
                  </div>
                  <div className="container">
                    {" "}
                    <hr />{" "}
                  </div>
                  <div>
                    <h1 className=" text-2xl mt-1 p-1">Payment Methods</h1>
                  </div>

                  <div className="w-100 border text-lg">
                    <button
                      type="button"
                      className="border-2 ml-8 mt-3 mb-4  border-gray-600"
                      style={{ width: "80%" }}
                    >
                      Credit / Debit card
                    </button>

                    <button
                      type="button"
                      className="border-2 ml-8 mt-2 mb-4  border-gray-600 text-gray-600"
                      style={{ width: "80%" }}
                    >
                      Wallet
                    </button>

                    <button
                      type="button"
                      className="border-2 ml-8 mt-2 mb-4  border-gray-600"
                      style={{ width: "80%"}}
                      onclick={()=>{handleClick()}}
                      id="payment-btn"
                    >
                      Cash On Delivery
                    </button>
                  </div>







                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
