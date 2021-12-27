import React from "react";
import { SuiLogo } from "../../components";
import { Button } from "@mui/material";
import { getAvatar } from "../../util/getLinkPublic/getLinkPublic";

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

ExLogos.SmallLogo = function SmallLogo() {
  return <SuiLogo w={30} h={30} src={getAvatar("daibo.png")} />;
};
