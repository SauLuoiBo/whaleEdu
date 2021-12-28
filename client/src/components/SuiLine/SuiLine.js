import React from "react";
import { Box } from "@mui/material";

const SuiLine = (props) => {
  const { px, color } = props;
  const getLineFormat = (px, color) => {
    var borderBottom = `${px}px solid ${color}`;
    console.log(borderBottom);
    return borderBottom;
  };

  return (
    <Box width={"100%"} borderBottom={getLineFormat(px || 2, color || "red")} />
  );
};

export default SuiLine;
