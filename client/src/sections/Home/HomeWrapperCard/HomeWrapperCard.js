import { Box } from "@mui/material";
import React from "react";
import { SuiBreak, SuiButton, SuiLine, SuiStack } from "../../../components";
import ExCardSubject from "../../../Examples/ExCardSubject/ExCardSubject";
import { ExText, ExButton } from "../../../Examples";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCube,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import { getRandomNumber } from "../../../util/random/getRandomNumber";

SwiperCore.use([EffectCube, Pagination, Autoplay, EffectCoverflow]);

const HomeWrapperCard = (props) => {
  var settings = {
    // slidesPerView: 1,
    centeredSiles: true,
    slidesPerView: "auto",
    // coverflowEffect: {
    //   rotate: 20,
    //   stretch: 5,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
    autoplay: {
      delay: getRandomNumber(3000, 5000),
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1340: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    // effect: "coverflow",
    grabCursor: true,
    // cubeEffect: {
    //   shadow: true,
    //   slideShadows: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94,
    // },
    pagination: true,
    className: "mySwiper",
    style: {
      padding: "5px 0",
    },
  };

  const { subtitle, describe } = props;

  return (
    <Box px={{ xs: 2, md: 0 }}>
      <SuiStack.Column>
        <ExText.Subtitle text={subtitle} />
        <Box maxWidth={400}>
          <ExText.Describe text={describe} />
        </Box>

        <SuiBreak.Large />
        <Box width={"100%"}>
          <Swiper {...settings}>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "auto",
                }}
              >
                <ExCardSubject />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "auto",
                }}
              >
                <ExCardSubject />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "auto",
                }}
              >
                <ExCardSubject />
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
                <ExCardSubject />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "auto",
                }}
              >
                <ExCardSubject />
              </div>
            </SwiperSlide>
          </Swiper>
        </Box>
      </SuiStack.Column>
      <SuiBreak.Medium />
      <SuiStack.Column>
        <ExButton text="Xem thêm" />
      </SuiStack.Column>

      <SuiBreak.Medium />
      <SuiLine px={1} />
      <SuiBreak.Large />
    </Box>
  );
};

export default HomeWrapperCard;
