import { Typography } from "@mui/material";
import React from "react";

const ExText = () => {
  return <div></div>;
};

export default ExText;

ExText.Subtitle = function Subtitle(props) {
  return (
    <Typography variant="h2" textAlign={"center"}>
      {props.text || "subtitle"}
    </Typography>
  );
};
