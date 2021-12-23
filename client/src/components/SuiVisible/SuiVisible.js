import { Box } from "@mui/system";
import React from "react";

const SuiVisible = ({ children }) => {
  return <Box sx={{ display: { xs: "block", sm: "none" } }}>{children}</Box>;
};

export default SuiVisible;

SuiVisible.md = function MD({ children }) {
  return <Box sx={{ display: { xs: "block", md: "none" } }}>{children}</Box>;
};

SuiVisible.lg = function LG({ children }) {
  return <Box sx={{ display: { xs: "block", lg: "none" } }}>{children}</Box>;
};

SuiVisible.xl = function XL({ children }) {
  return <Box sx={{ display: { xs: "block", xl: "none" } }}>{children}</Box>;
};

SuiVisible.xxl = function XXL({ children }) {
  return <Box sx={{ display: { xs: "block", xxl: "none" } }}>{children}</Box>;
};
