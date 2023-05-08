import Carousel from "react-bootstrap/Carousel";
import sliderimg1 from "../images/sliderimg1.png";
import fetchData from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import React from 'react';


function Slider() {
  const bannerImagesArray = useSelector(({ photos }) => photos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(bannerImagesArray[0]?.imageUrl);
  return (
    <div className="main">

   
      <Carousel variant="dark" controls={false}>
      {bannerImagesArray?.map((e,i)=>{
      if(e.mobile === 1){
      return(
        <Carousel.Item>
          <img className="d-block w-100" src={e?.imageUrl} alt="" />
        </Carousel.Item>
      )
    }
    }
    )}

    
    {bannerImagesArray?.map((e,i)=>{
      if(e.mobile === 0){
      return(
        <Carousel.Item>
          <img className="d-block w-100" src={e?.imageUrl} alt="" />
        </Carousel.Item>
      )
    }
    }
    )}
        
      </Carousel>
    </div>
  );
}

export default Slider;
