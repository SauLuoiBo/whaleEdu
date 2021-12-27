import React from "react";
import Head from "next/head";
import Slider from "react-slick";
import { getButton } from "../util/getLinkPublic/getLinkPublic";

const login = () => {
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <>
      <Head>
        <title>Whale Education - Đăng nhập </title>
        <meta name="description" content="Whale Education" />
        <link rel="icon" href="/icons/logos/LogoWhale.svg" />
      </Head>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <h2> Lazy Load</h2>
        <div style={{ width: "80%" }}>
          <Slider {...settings}>
            <div>
              <img src={getButton("fbSmall.svg")} />
            </div>
            <div>
              <img src={getButton("fbSmall.svg")} />
            </div>
            <div>
              <img src={getButton("fbSmall.svg")} />
            </div>
            <div>
              <img src={getButton("fbSmall.svg")} />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default login;
