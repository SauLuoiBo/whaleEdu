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

ExLogos.LongLogo = function Center({ onClick }) {
  return (
    <Button variant="text" onClick={onClick}>
      <SuiLogo w={150} h={45} src="/icons/logos/LogoWhaleDai.svg" />
    </Button>
  );
};
