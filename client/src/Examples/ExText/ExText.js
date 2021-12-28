import { Typography } from "@mui/material";
import React from "react";

const ExText = () => {
  return <div></div>;
};

export default ExText;

ExText.Subtitle = function Subtitle(props) {
  return (
    <Typography variant="h1" textAlign={"center"}>
      {props.text || "subtitle"}
    </Typography>
  );
};

ExText.Describe = function Describe(props) {
  return (
    <Typography variant="h4" textAlign={"center"}>
      {props.text || "Describe"}
    </Typography>
  );
};
