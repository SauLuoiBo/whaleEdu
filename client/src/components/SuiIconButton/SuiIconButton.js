import { Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SuiIconButton = (props) => {
  const { text } = props;
  return (
    <Button
      variant="containedSizeLarge"
      size="Large"
      startIcon={<ArrowForwardIosIcon />}
      sx={{ p: 0 }}
    >
      <Typography variant="h4">{text || "text"}</Typography>
    </Button>
  );
};

export default SuiIconButton;
