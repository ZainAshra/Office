import Carousel from "react-bootstrap/Carousel";
import {fetchData} from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import _ from "lodash";

function Slider() {
  const [isMobile, setisMobile] = useState(false);
  const bannerImagesArray = useSelector(({ photos }) => photos);
  const groupBannerData = _.groupBy(bannerImagesArray, "mobile");
  const mobileBannersData = groupBannerData[1];
  const webBannersData = groupBannerData[0];
  console.log(mobileBannersData, "mobile");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  // console.log(bannerImagesArray[0]?.imageUrl);

  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main">
      <Carousel style={{ padding: "6rem" }} variant="dark">
        {isMobile
          ? mobileBannersData?.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    className="d-block w-100"
                    src={item?.imageUrl}
                    alt=""
                  />
                </Carousel.Item>
              );
            })
          : webBannersData?.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={item?.imageUrl}
                    alt=""
                  />
                </Carousel.Item>
              );
            })}
      </Carousel>
      <br />
    </div>
  );
}

export default Slider;
