import React from "react";
import { Button, Typography } from "@mui/material";
import SuiLogo from "../SuiLogo/SuiLogo";

const SuiButton = (props, { children }) => {
  const { text } = props;
  return (
    <Button variant="containedPrimary">
      <Typography variant="h2">{text || "text"}</Typography>
    </Button>
  );
};

export default SuiButton;
