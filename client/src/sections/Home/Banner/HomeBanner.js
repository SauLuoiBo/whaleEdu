import { Box } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Pagination, Autoplay } from "swiper";

import ExImage from "../../../Examples/ExImage/ExImage";
import { height } from "@mui/system";

SwiperCore.use([EffectCube, Pagination, Autoplay]);

const HomeBanner = () => {
  var settings = {
    spaceBetween: 30,
    centeredSiles: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: true,
    className: "mySwiper",
  };

  // hook

  // element
  return (
    <Box width={"100%"}>
      <Swiper {...settings}>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ExImage />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ExImage />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ExImage />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ExImage />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ExImage />
          </div>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HomeBanner;
