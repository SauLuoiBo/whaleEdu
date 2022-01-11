import React from "react";
import { Button, Typography } from "@mui/material";

const SuiButton = (props) => {
  const { text, onClick } = props;
  return (
    <Button
      variant="containedPrimary"
      sx={{ width: "fit-content" }}
      onClick={onClick}
    >
      <Typography variant="h2">{text || "text"}</Typography>
    </Button>
  );
};

export default SuiButton;

SuiButton.Full = function Full(props) {
  //khai bao
  const { text, onClick } = props

  //ham

  //ket suát
  return (
    <Button variant="containedPrimary" sx={{ width: "100%" }} onClick={onClick}>
      <Typography variant="h2">{text || "text"}</Typography>
    </Button>
  );
};
