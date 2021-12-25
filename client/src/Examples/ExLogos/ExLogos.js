import React from "react";
import { SuiLogo } from "../../components";
import { Button } from "@mui/material";

const ExLogos = ({ onClick, href }) => {
  return (
    <Button variant="text" href={href} onClick={onClick}>
      <SuiLogo.Medium />
    </Button>
  );
};

export default ExLogos;

ExLogos.LongLogo = function Center({ onClick, href }) {
  return (
    <Button variant="text" href={href} onClick={onClick}>
      <SuiLogo w={150} h={45} src="/icons/logos/LogoWhaleDai.svg" />
    </Button>
  );
};
