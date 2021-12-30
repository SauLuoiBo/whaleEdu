import { Box } from "@mui/material";
import React from "react";

const SuiBox = () => {
  return <div></div>;
};

export default SuiBox;

SuiBox.Center = function Center({ children }) {
  return <Box sx={{ width: "100%", overflow: "hidden" }}>{children}</Box>;
};

SuiBox.Right = function Right({ children }) {
  return <Box minWidth={{ xs: "100%", md: 270 }}>{children}</Box>;
};
