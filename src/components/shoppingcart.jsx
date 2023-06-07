import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderBootstap from "./mainheader";
import { Button } from "react-bootstrap";
import { addtocartdata } from "../redux/actions";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import DeleteIcon from "@mui/icons-material/Delete";
import emptycartimg from "..//images/Emptycardimg.png";
import _ from "lodash";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [cardsCount, setCardsCount] = useState(0);
  const [cardsdata, setcardsdata] = useState([]);
  const [totalbill, settotalBill] = useState(0);
  // let allSelectedCards = useSelector((state) => _.cloneDeep(state.AddToCartReducder));
  const allSelectedCards = useSelector((state) => state.AddToCartReducder);
  console.log(allSelectedCards, "ssss");
  const [btnbackground, setbtnbackground] = useState(false);
  const [valuecount, setValuecount] = useState(1);

  const arr = [];
  const [purchaseLimit, setpurchaseLimit] = useState(1);

  function sum() {
    for (var i = 0; i <= allSelectedCards?.length; i++) {
      if (allSelectedCards[i]?.minPrice > 0) {
        arr.push(allSelectedCards[i]?.minPrice * allSelectedCards[i]?.counter);
      } else {
        // console.log()
      }
    }
    const sum = _.sum(arr);
    settotalBill(sum);
    // console.log(allSelectedCards,"zain")
  }

  const handleClick1 = (e) => {
    setbtnbackground(true);
  };
  const handleClick2 = (e) => {
    setbtnbackground(false);
  };

  useEffect(() => {
    sum();
  }, [allSelectedCards]);

  const removeAll = (e) => {
    setcardsdata([]);
    setCardsCount(0);
    dispatch(addtocartdata("REMOVEALL", []));
    sum();
  };

  useEffect(() => {
    setcardsdata(allSelectedCards);
    setCardsCount(allSelectedCards.length);
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

  const increaseValue = (x, i) => {
    if (x.counter < x.purchaseLimit) {
      const index = allSelectedCards.findIndex((obj) => obj.posId === x.posId);
      console.log(index);
      let newdata = _.cloneDeep(allSelectedCards);
      newdata[index].counter++;
      console.log(newdata, "newdata");

      dispatch(addtocartdata("NEWDATA", newdata));
    }
  };

  const decreseValue = (x) => {
    if (x.counter > 1) {
      const index = allSelectedCards.findIndex((obj) => obj.posId === x.posId);
      console.log(index);
      let newdata = _.cloneDeep(allSelectedCards);
      newdata[index].counter--;
      console.log(newdata, "newdata");

      dispatch(addtocartdata("NEWDATA", newdata));
    }
  };

  return (
    <>
      <div>
        <HeaderBootstap
          cardsCount={cardsCount}
          className="sticky-top"
          style={{
            position: "sticky",
          }}
        />
        {allSelectedCards.length < 1 && (
          <div className="container" style={{ fontFamily: "poppins" }}>
            <div className="grid justify-items-center text-center">
              <div className="text-blue-900">
                <img
                  className=" sm:-mb-10 md:-mb-14"
                  src={emptycartimg}
                  alt=""
                />
                <span>Your Cart is empty</span>
                <p>Looks like you haven’t made your choice yet...</p>

                <Link to="/">
                  <button className="bg-blue-950 w-80 rounded mt-1 mb-1 p-1 text-white hover:bg-blue-800">
                    Back to home
                  </button>
                </Link>
                <p>let’s scroll and shop</p>
              </div>
            </div>
          </div>
        )}
        {allSelectedCards.length > 0 && (
          <div style={{ color: "black" }} className="mainContent">
            <div className=" ">
              <div className=" flex md:flex-col lg:flex-row sm:flex-col pr-4 mr-md-2 mr-sm-0">
                <div
                  className=" w-100"
                  style={{ backgroundColor: "royalbrown" }}
                >
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
                          className="bg-danger m-1 cursor-pointer"
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
                                    key={i}
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
                                              onClick={() => decreseValue(x)}
                                            >
                                              -
                                            </button>
                                          </div>
                                          <input
                                            type="text"
                                            className="form-control input-sm text-center"
                                            value={x?.counter}
                                          />
                                          <div className="input-group-append">
                                            <button
                                              className="btn btn-outline-secondary"
                                              type="button"
                                              onClick={() =>
                                                increaseValue(x, i)
                                              }
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
                                      <div className="justify-content-center mt-4 ">
                                        <DeleteIcon
                                          className="mt-5 cursor-pointer"
                                          onClick={() =>
                                            removeCart(x?.productId)
                                          }
                                        />
                                        {/* <img
                                        onClick={() => removeCart(x?.productId)}
                                        width="100"
                                        src={crossIcon}
                                        alt=""
                                      /> */}
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

                <div className="grid rounded-lg md:basis-1/3 lg:basis-1/3 sm:grid-cols-1  lg:mt-25 md:mt-20 border ml-5">
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
                    className="mt-8 rounded-lg grid gap-2"
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
                        <AutorenewIcon className="cursor-pointer" />
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

                    <div className="w-100  text-lg">
                      {!btnbackground && (
                        <button
                          type="button"
                          className="border-2 ml-8 mt-3 mb-4  border-gray-600"
                          style={{ width: "80%" }}
                          onClick={(e) => handleClick1(e)}
                          id="payment-btn1"
                        >
                          Credit / Debit card
                        </button>
                      )}

                      {btnbackground && (
                        <button
                          type="button"
                          className="border-2 ml-8 mt-3 mb-4 bg-blue-500 border-gray-600"
                          style={{ width: "80%" }}
                          onClick={(e) => handleClick2(e)}
                          id="payment-btn1"
                        >
                          Credit / Debit card
                        </button>
                      )}

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
                        style={{ width: "80%" }}
                        // onclick={handleClick2()}
                        id="payment-btn2"
                      >
                        Cash On Delivery
                      </button>
                    </div>

                    <div className="container">
                      {" "}
                      <hr />
                    </div>
                    <div className="text-center">
                      <h1 className=" text-2xl mt-1 p-1">
                        Order Comment{" "}
                        <span className="text-gray-600">{`(Optional)`}</span>
                      </h1>
                      <div
                        class="form-group container mb-4"
                        style={{ marginTop: "-4px" }}
                      >
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea
                          class="form-control w-60 m-auto mb-4"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
