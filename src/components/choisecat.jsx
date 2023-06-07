import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderBootstap from "./mainheader";
import { Rating } from "@mui/material";
import { addtocartdata } from "../redux/actions";

const Choisecat = () => {
  const btnsarry = [];
  const dispatch = useDispatch();
  const dat = useSelector((state) => state.choiseCatReducer);
  console.log(dat[0]?.length,dat,"data----->");
  const [value, setValue] = useState(0);
  const [totalpages, settotalpages] = useState();
  const [showProducts, setShowProducts] = useState();
  

  const [pagenumber, setPageNumber] = useState(1);

  useEffect(() => {
    settotalpages(Math.ceil(dat[0]?.length / 5));
    console.log(totalpages);;
  }, [totalpages,pagenumber]);
  
  for (let i = 1; i <= totalpages; i++) {
    btnsarry.push(i);
  }
  console.log(btnsarry, "btnnnn");
  console.log(btnsarry,"btns")

  useEffect(() => {
    if (pagenumber === 1) {
      setShowProducts(dat[0].slice(pagenumber, pagenumber * 5 + 1));
    } else {
      setShowProducts(dat[0].slice(pagenumber * 5 - 5, pagenumber * 5 + 1));
    }
  }, [pagenumber, dat]);
  const addToCartBtn = (data) => {
    data.counter =1
    dispatch(addtocartdata("ADDTOCART", data));
  };
  console.log(showProducts);

  const changeProducts = (btnNumber) => {
    setPageNumber(btnNumber);
  };

  const PreandNextBtn = (action) => {
    console.log(action);

    if (action === "previous") {
      setPageNumber(pagenumber - 1);
    }
    if (action === "next") {
      setPageNumber(pagenumber + 1);
    }
  };

  return (
    <>
      <div>
        <HeaderBootstap />
        <div className="grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-3 border-2">
          {showProducts?.map((e, i) => {
            return (
              <>
                <div className=" grid mt-2 mr-4  ml-4 content-center ">
                  <div className="content-center ">
                    <div>
                      <img
                        src={e.imageUrl}
                        alt=""
                        className=" border rounded p-5 "
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                  <div className="ml-2">
                    <p className="font-bold text-gray-700 mb-2">{e.brand}</p>
                  </div>
                  <div className="ml-2 h-12">
                    <p className="font-bold text-gray-900 m-auto">{e.title}</p>
                  </div>

                  <div>
                    <Rating
                      name="simple-controlled"
                      className="ml-2"
                      value={e.avgRating - 1}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                  <div className="flex flex-raw ml-2 justify-between ">
                    <div className=" ">
                      <button
                        className=" rounded border border-gray-950 bg-blue-400"
                        onClick={() => {
                          addToCartBtn(e);
                        }}
                      >
                        <p className="md:p-2 lg:p-2 sm:p-1 sm:text-sm md:text-sm  lg:text-lg">
                          Add to cart
                        </p>
                      </button>
                    </div>
                    <div className="md:mr-0 lg:mr-4 sm:mr-0">
                      <p className="font-bold text-blue-900 text-lg italic mt-1">
                        PKR {e.minPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        {/* pagination */}
        {totalpages === 6 ||
          (totalpages > 0 && totalpages < 7 && (
            <>
              <div className=" text-gray-950 font-bold m-4 ">
                <div className=" justify-end flex flex-row  mr-6 ">
                  <button
                    onClick={() => PreandNextBtn("previous")}
                    className={
                      pagenumber === 1 ? "hidden" : " bg-gray-300 p-2 rounded"
                    }
                  >
                    Previous
                  </button>
                  {btnsarry?.map((x, i) => {
                    return (
                      <>
                        <div className="" key={i}>
                          <button
                            href="#"
                            onClick={() => {
                              changeProducts(x);
                            }}
                            className={
                              x === pagenumber
                                ? " p-2 rounded  bg-gray-400 ml-2 mr-2 text-blue-700"
                                : "p-2 rounded  bg-gray-300 ml-2 mr-2 hover:text-blue-700 hover:bg-gray-200"
                            }
                          >
                            {" "}
                            {x}
                          </button>
                        </div>
                      </>
                    );
                  })}

                  <button
                    onClick={() => PreandNextBtn("next")}
                    className={
                      pagenumber === totalpages
                        ? "hidden"
                        : " bg-gray-300 p-2 rounded"
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ))}
        ;
        {totalpages > 2 && (
          <div className=" text-gray-950 font-bold m-4 ">
            <div className=" justify-end flex flex-row  mr-6 ">
              <button
                onClick={() => PreandNextBtn("previous")}
                className={
                  pagenumber === 1 ? "hidden" : " bg-gray-300 p-2 rounded"
                }
              >
                Previous
              </button>
              <button
                onClick={() => {
                  changeProducts(1);
                }}
                className={
                  pagenumber === 1
                    ? "  p-2 rounded  bg-gray-400 ml-2 mr-2 text-blue-700"
                    : "p-2 rounded  bg-gray-300 ml-2 mr-2 hover:text-blue-700 hover:bg-gray-200"
                }
              >
                1
              </button>

              <button
                onClick={() => {
                  changeProducts(2);
                }}
                className={
                  pagenumber === 2
                    ? "p-2 rounded  bg-gray-400 ml-2 mr-2 text-blue-700 hover:bg-gray-200"
                    : "p-2 rounded  bg-gray-300 ml-2 mr-2 hover:text-blue-700 hover:bg-gray-200"
                }
              >
                {pagenumber === 1 || pagenumber === 2 || totalpages > 2
                  ? `${2}`
                  : ""}
              </button>

              <button
                onClick={() => {
                  changeProducts(pagenumber);
                }}
                className={
                  pagenumber > 2 &&
                  pagenumber < totalpages &&
                  pagenumber < totalpages - 1 &&
                  totalpages > 2
                    ? "p-2 rounded  bg-gray-400 ml-2 mr-2 text-blue-700 "
                    : "hidden"
                }
              >
                {" "}
                {pagenumber > 2 &&
                pagenumber < totalpages &&
                pagenumber < totalpages - 1 &&
                totalpages > 2
                  ? pagenumber
                  : ""}
              </button>
              <button
                onClick={() => {
                  changeProducts(pagenumber + 1);
                }}
                className={
                  pagenumber > 2 &&
                  pagenumber < totalpages &&
                  pagenumber < totalpages - 2 &&
                  totalpages > 2 &&
                  pagenumber !== 2
                    ? "p-2 rounded  bg-gray-300 ml-2 mr-2 hover:text-blue-700 hover:bg-gray-200"
                    : "hidden"
                }
              >
                {" "}
                {pagenumber > 2 &&
                pagenumber < totalpages &&
                pagenumber < totalpages - 1 &&
                totalpages > 2
                  ? pagenumber + 1
                  : ""}
              </button>

              <span>....</span>
              <button
                onClick={() => {
                  changeProducts(totalpages - 1);
                }}
                className={
                  pagenumber === totalpages - 1
                    ? "  p-2 rounded  bg-gray-400 ml-2 mr-2 text-blue-700"
                    : "p-2 rounded  bg-gray-300 ml-2 mr-2 hover:text-blue-700 hover:bg-gray-200"
                }
              >
                {totalpages > 3 ? totalpages - 1 : ""}
              </button>
              <button
                onClick={() => changeProducts(totalpages)}
                className={
                  pagenumber === totalpages
                    ? "  p-2 rounded  bg-gray-400 ml-2 mr-2 text-blue-700"
                    : "p-2 rounded  bg-gray-300 ml-2 mr-2 hover:text-blue-700 hover:bg-gray-200"
                }
              >
                {totalpages}
              </button>

              <button
                onClick={() => PreandNextBtn("next")}
                className={
                  pagenumber === totalpages
                    ? "hidden"
                    : " bg-gray-300 p-2 rounded"
                }
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Choisecat;
