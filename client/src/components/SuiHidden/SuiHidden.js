import { Box } from "@mui/system";
import React from "react";

const SuiHidden = ({ children }) => {
  return <Box sx={{ display: { xs: "none", sm: "block" } }}>{children}</Box>;
};

export default SuiHidden;

SuiHidden.md = function MD({ children }) {
  return <Box sx={{ display: { xs: "none", md: "block" } }}>{children}</Box>;
};

SuiHidden.lg = function LG({ children }) {
  return <Box sx={{ display: { xs: "none", lg: "block" } }}>{children}</Box>;
};

SuiHidden.xl = function XL({ children }) {
  return <Box sx={{ display: { xs: "none", xl: "block" } }}>{children}</Box>;
};

SuiHidden.xxl = function XXL({ children }) {
  return <Box sx={{ display: { xs: "none", xxl: "block" } }}>{children}</Box>;
};
