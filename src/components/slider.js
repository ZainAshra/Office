import Carousel from "react-bootstrap/Carousel";
import { fetchData } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import _ from "lodash";

function Slider() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const [isMobile, setisMobile] = useState(false);

  const bannerImagesArray = useSelector((state) => state.changeTheBanner);

  const groupBannerData = _.groupBy(bannerImagesArray?.photos, "mobile");

  const mobileBannersData = groupBannerData[0];

  const webBannersData = groupBannerData[1];

  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
      // console.log(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main">
      <Carousel
        style={{ padding: "2rem" }}
        variant="dark"
        nextIcon={null} // Remove next arrow
        prevIcon={null}
      >
        {isMobile
          ? mobileBannersData?.map((item,i) => {
              return (
                <Carousel.Item key={i}>
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
          : webBannersData?.map((item,i) => {
              return (
                <Carousel.Item key={i} style={{ marginTop: "-4rem" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "300px",
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
