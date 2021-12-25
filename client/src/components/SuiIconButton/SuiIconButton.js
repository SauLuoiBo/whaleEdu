import { Button, Typography, IconButton, Icon } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SuiLogo } from "..";

const SuiIconButton = (props) => {
  const { text, href } = props;
  return (
    <Button
      variant="containedSizeLarge"
      size="Large"
      startIcon={<ArrowForwardIosIcon />}
      sx={{ p: 0 }}
      href={href}
    >
      <Typography variant="h4">{text || "text"}</Typography>
    </Button>
  );
};

export default SuiIconButton;

SuiIconButton.Icon = function Iconbutton({ icon, href }) {
  return (
    <IconButton href={href} target={"_blank"}>
      <Icon>{icon || "star"}</Icon>
    </IconButton>
  );
};

SuiIconButton.Logo = function Logobutton({ src, href, size, alt }) {
  return (
    <IconButton href={href} target={"_blank"} p={0}>
      <SuiLogo src={src} h={size} w={size} alt={alt} />
    </IconButton>
  );
};
