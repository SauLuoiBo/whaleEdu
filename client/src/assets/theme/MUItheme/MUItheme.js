import React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Defalttheme } from "../theme/theme";
import button from "../components/button";

const theme = createTheme({
  ...Defalttheme,
  components: { MuiButton: { ...button } },
});

const MUItheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUItheme;
