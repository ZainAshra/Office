import React from "react";
import HeaderBootstap from "./mainheader";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import image from "../images/productimg.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Rating, TextField, Typography } from "@mui/material";
import fileupload from "..//images/fileupload.PNG"
const ProductDescription = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 place-content-center  mt-6 mx-auto gap-5 ">
        {/* /image div */}
        <div className="grid place-content-center   ">
          <div className="mt-8">
            <img src={image} alt="" />
          </div>

          <div className="">carousel</div>
        </div>

        {/* product deatil div */}
        <div className=" grid sm:justify-center   lg:justify-start md:justify-start ">
          <div className="flex flex-row mt-8  ">
            <div className="text-gray-900 text-lg ">brand: NYX </div>
            <div className="ml-8 w-12 bg-sky-500/100 text-center rounded">
              FBP
            </div>
          </div>

          <div className="text-gray-900  text-2xl">
            Nyx Soft Matte Long-Lasting <br /> Lip Cream 8ml
          </div>
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.95 out of 5
            </p>
          </div>
          <div className="flex flex-row">
            <div className="text-4xl text-blue-900 ">PKR 1099</div>
            <div className=" mt-2 ml-6 text-2xl text-red-600 italic">
              <del>1099</del>
            </div>
          </div>

          <div className="text-lg">
            <p className="text-gray-900 text-lg">
              Color:<span className="text-blue-400">Blue</span>
            </p>
          </div>

          <div className="flex flex-raw">
            <div className=" ml-1 rounded-full w-7 h-7 bg-blue-500 text-blue-500   hover:outline outline-blue-400 outline-2 outline-offset-2 "></div>
            <div className="ml-2 rounded-full w-7 h-7 bg-green-500 text-blue-500 text-blue-500  hover:outline outline-green-400 outline-2 outline-offset-2 "></div>

            <div className="ml-2 rounded-full w-7 h-7 bg-yellow-500 text-blue-500 hover:outline outline-yellow-400 outline-2 outline-offset-2 "></div>
            <div className="ml-2 rounded-full w-7 h-7 bg-red-900 text-blue-500 hover:outline outline-red-900 outline-2 outline-offset-2 "></div>
            <div className="ml-2 rounded-full w-7 h-7 bg-red-600 text-blue-500 hover:outline outline-red-600 outline-2 outline-offset-2 "></div>
          </div>

          <div className="flex justify-between  w-40  h-6 mt-3 bg-gray-200  bg-grey-800   ">
            <div className="text-gray-400 basis-1/5  bg-gray-200 h-6 w-9 text-center hover:cursor-pointer focus:bg-gray-400">
              +{" "}
            </div>
            <div className="text-gray-400 basis-1/2 bg-gray-200   bg-gray-200 h-6 w-100 text-center">
              <input
                className="w-100 bg-gray-200 text-center text-yellow-500 "
                type="number"
                value="1"
              ></input>{" "}
            </div>
            <div className="text-gray-400 basis-1/5  bg-gray-200 h-6 w-9 text-center">
              -{" "}
            </div>
          </div>

          <div className="flex flex-raw">
            <div className="col-9 ">
              <button
                type="button"
                class=" w-70 h-10 text-gray-900 mt-2 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
              >
                {/* <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg> */}
                <svg
                  className="w-10 h-8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
            <div className="col-3  mt-1 ">
              <div className=" h-8 mt-2 w-50 bg-gray-800  text-center rounded">
                <FavoriteIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part2 */}

      <div style={{ height: "30rem", backgroundColor: "#0B223F" }}>
        <div
          className=" grid grid-cols-2 mainparent mt-20 "
          style={{ backgroundColor: "#0B223F" }}
        >
          <div className="headins grid  justify-center font-bold text-4xl sm:ml-3">
            <div className="mt-4">
              <h1 className="text-yellow-400">Highlights</h1>
            </div>
            <div className="mt-4">
              {" "}
              <h1>Product Description</h1>
            </div>

            <div className="mt-4">
              <h1>Specification</h1>
            </div>
          </div>

          <div className="smalltext mt-6">
            <div>
              <CheckCircleIcon color="success" fontSize="20px" /> delighful
              creemy made
            </div>
            <div className="mt-1">
              <CheckCircleIcon color="success" fontSize="20px" />
            </div>
            <div className="mt-1">
              {" "}
              <CheckCircleIcon color="success" fontSize="20px" />
            </div>
          </div>
        </div>
      </div>

      {/* part 3 */}

      <div className="mt-4 grid grid-cols-2 justify-items-center ">
        <div className="font-bold text-4xl text-blue-900">
          <h1>Rating & Reviews</h1>
        </div>
        <div>
          <button
            class="rounded w-60 h-10  s:w-30 sm:mt-3"
            style={{ backgroundColor: "#009FD1" }}
          >
            Write a Reviews
          </button>
        </div>
      </div>

      <hr />
      {/* after the onclick to add reviews */}

      <div className="grid ">
        <div className="mt-3 w-3/4 text-blue-900  m-auto">
          <div className="font-bold">Rating </div>
          <div>
            <Typography component="legend"></Typography>
            <Rating
              name="simple-controlled"
              value={4}
              onChange={(event, newValue) => {
                // setValue(newValue);
              }}
            />
          </div>
          <div className="font-bold">Review Title</div>
          <div className="mt-3 ">
            {" "}
            <TextField
              className="w-100 h-10"
              id="outlined-textarea"
              label="Enter Your Review title"
              placeholder="Enter Your Review title"
              multiline
            />
          </div>

          <div className="mt-4 font-bold">Review</div>
          <div className="mt-3 mb-2">
            <TextField
              className="w-full h-full"
              id="outlined-textarea"
              label="Review"
              placeholder="Enter Your Review here"
              multiline
            />
          </div>

          <div className="mt-4 font-bold">Picture/Video (optional)</div>

          <div type="file" className="bg-blue-400 h-20 w-20">

            <label class="block mb-2 relative overflow-hidden" for="file_input">
              <img src={fileupload} alt="Upload" />
              <input
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="file_input"
                type="file"
              />
            </label>
          </div>


          <div>
            <div>button</div>
            <div> button</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
