import React from "react";
import { ThemeProvider } from "styled-components";
import { Defalttheme } from "../theme/theme";
import GlobalStyled from "../Global/global";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const StyledTheme = ({ children }) => {
  return (
    <ThemeProvider theme={Defalttheme}>
      <GlobalStyled />
      {children}
    </ThemeProvider>
  );
};

export default StyledTheme;
