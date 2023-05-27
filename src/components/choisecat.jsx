import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderBootstap from "./mainheader";
import { Rating } from "@mui/material";
import Button from "react-bootstrap/Button";
import { addtocartdata } from "../redux/actions";

const Choisecat = () => {
  const dispatch = useDispatch();
  const dat = useSelector((state) => state.choiseCatReducer);
  console.log(dat[0]?.length);
  const [value, setValue] = useState(0);
  const [totalpages,settotalpages]=useState()

 

  useEffect(()=>{
    settotalpages(Math.ceil(dat[0]?.length / 30) )
  },[])
  
  const addToCartBtn = (data) => {
  
    dispatch(addtocartdata('ADDTOCART',data))
  };

  return (
    <>
      <div>
        <HeaderBootstap />
        <div className="grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-3 border-2">
          {dat[0].map((e, i) => {
            return (
              <>
                <div className=" grid mt-2 mr-4  ml-4 content-center ">
                  <div className="content-center">
                    <div>
                      <img
                        src={e.imageUrl}
                        alt=""
                        className=" border rounded "
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                  <div className="ml-2">
                    <p className="font-bold text-gray-700 mb-2">{e.brand}</p>
                  </div>
                  <div className="ml-2">
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
                          addToCartBtn(e)
                          ;
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
      </div>
    </>
  );
};

export default Choisecat;
