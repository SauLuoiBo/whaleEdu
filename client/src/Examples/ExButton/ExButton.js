import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { SuiLogo, SuiStack } from "../../components";
import { phoneFormat } from "../../util/cover/phoneFormat";
import { getButton } from "../../util/getLinkPublic/getLinkPublic";

const ExButton = (props) => {
  const { text, onClick, href } = props;
  return (
    <Button variant="contained" onClick={onClick} href={href}>
      <Typography
        variant="h2"
        sx={{ textTransform: "none", color: "white.main" }}
      >
        {text || "text"}
      </Typography>{" "}
    </Button>
  );
};

export default ExButton;

ExButton.Text = function Text(props) {
  const { text, onClick, href } = props;
  return (
    <Button variant="h2" href={href} onClick={onClick}>
      <Typography
        variant="h2"
        sx={{ textTransform: "none", color: "primary.main" }}
      >
        {text || "text"}
      </Typography>
    </Button>
  );
};

ExButton.Hotline = function Hotline(props) {
  const { phone } = props;
  return (
    <SuiStack.Row sx={{ cursor: "pointer", width: "fit-content" }}>
      <Box>
        <SuiLogo.Medium src={getButton("phoneRound.svg")} />
      </Box>
      <a href={`tel:${phone || "0948616896"}`}>
        <Typography variant="h3">
          HOTLINE: {phoneFormat(phone || "0948616896")}
        </Typography>
      </a>
    </SuiStack.Row>
  );
};
