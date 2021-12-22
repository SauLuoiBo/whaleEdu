import React from "react";
import { ThemeProvider } from "styled-components";
import { Defalttheme } from "../theme/theme";
import GlobalStyled from "../Global/global";

const StyledTheme = ({ children }) => {
  return (
    <ThemeProvider theme={Defalttheme}>
      <GlobalStyled />
      {children}
    </ThemeProvider>
  );
};

export default StyledTheme;
