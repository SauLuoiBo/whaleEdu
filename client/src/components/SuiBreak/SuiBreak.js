import { Box } from "@mui/material";
import React from "react";

const SuiBreak = (props) => {
  const { xs, sm, md, lg, xl, xxl } = props;
  return (
    <Box maxWidth="100%" sx={{ height: { xs, sm, md, lg, xl, xxl } }}></Box>
  );
};

export default SuiBreak;

SuiBreak.Small = function Small() {
  return <Box maxWidth="100%" sx={{ height: "1rem" }}></Box>;
};

SuiBreak.Medium = function Medium() {
  return <Box maxWidth="100%" sx={{ height: "2rem" }}></Box>;
};

SuiBreak.Large = function Large() {
  return <Box maxWidth="100%" sx={{ height: "4rem" }}></Box>;
};
