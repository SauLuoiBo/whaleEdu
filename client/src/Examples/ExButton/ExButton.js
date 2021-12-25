import { Button, Typography } from "@mui/material";
import React from "react";

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
