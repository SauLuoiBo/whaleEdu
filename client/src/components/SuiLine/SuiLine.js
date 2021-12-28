import React from "react";
import { Box } from "@mui/material";

const SuiLine = (props) => {
  const { px, color, sx } = props;
  const getLineFormat = (px, color) => {
    var borderBottom = `${px}px solid ${color}`;
    return borderBottom;
  };

  return (
    <Box
      width={"100%"}
      borderBottom={getLineFormat(px || 2, color || "gray")}
      sx={sx}
    />
  );
};

export default SuiLine;
