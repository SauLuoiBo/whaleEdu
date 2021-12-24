import React from "react";
import { SuiLogo } from "../../components";
import { Button } from "@mui/material";

const ExLogos = ({ onClick }) => {
  return (
    <Button variant="text" onClick={onClick}>
      <SuiLogo.Medium />
    </Button>
  );
};

export default ExLogos;
