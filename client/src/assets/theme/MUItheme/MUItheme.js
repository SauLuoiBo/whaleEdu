import React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Defalttheme } from "../theme/theme";
import button from "../components/button";
import icon from "../components/icon";
import iconButton from "../components/iconButton";
import svgIcon from "../components/svgIcon";

const theme = createTheme({
  ...Defalttheme,
  components: {
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiSvgIcon: { ...svgIcon },
    MuiIcon: { ...icon },
  },
});

const MUItheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUItheme;
