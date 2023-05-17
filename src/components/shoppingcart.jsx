import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderBootstap from "./mainheader";
import { Button, Container } from "react-bootstrap";
import crossIcon from "../images/cross icon.png";
import { addtocartdata } from "../redux/actions";
import { cardsCount } from "../redux/actions";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [cardsCount, setCardsCount] = useState(0);
  const [cardsdata, setcardsdata] = useState([]);

  const allSelectedCards = useSelector((state) => state.AddToCartReducder);

  const removeAll = (e) => {
    setcardsdata([]);
    setCardsCount(0);
    dispatch(addtocartdata("REMOVEALL", []));
  };

  useEffect(() => {
    setcardsdata(allSelectedCards);

    // dispatch(addtocartdata("REMOVESINGLECART", cardsdata));
  }, []);

  const removeCart = (productid) => {
    const updatedItems = allSelectedCards.filter(
      (cardsdata) => cardsdata?.productId !== productid
    );

    setcardsdata(updatedItems);

    // setcardsdata(updatedItems);
    dispatch(addtocartdata("REMOVEITEM", updatedItems));
  };

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
        <div
          style={{ minHeight: "577px", color: "black" }}
          className="mainContent"
        >
          <div className="container-fluid">
            <div className=" d-flex pr-4 mr-md-2 mr-sm-0 raw">
              <div
                className="col-xl-9 col-md-12 col-lg-12 col-sm-12 col-12"
                style={{ backgroundColor: "royalbrown" }}
              >
                <div className="row">
                  <div className="col-12">
                    <h1 className="m-2">Shopping Cart</h1>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                      <Button
                        onClick={(e) => removeAll()}
                        className="bg-danger m-1"
                      >
                        {" "}
                        Remove
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

              <div className="col-xl-3 col-md-12 col-lg-12 col-sm-12 col-12">
                <div className="row">
                  <div className="col">
                    <span
                      class="border-bottom d-block text-left pl-1 pt-3 pb-3"
                      style={{
                        fontWeight: "900",
                        fontSize: "1.3rem",
                        color: "white",
                      }}
                    >
                      Payment Summary
                    </span>
                    <div className="mt-3 row">
                      <div className="col">item{cardsCount}</div>
                      <div className="col">11111</div>
                    </div>
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
