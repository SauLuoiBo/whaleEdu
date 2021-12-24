import { Stack } from "@mui/material";
import React from "react";

const SuiStack = () => {
  return <div></div>;
};

export default SuiStack;

SuiStack.Row = function Row({ children, sx }) {
  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      spacing={1}
      sx={sx}
    >
      {children}
    </Stack>
  );
};

SuiStack.ColumnFlex = function ColumnFlex({ children }) {
  return (
    <Stack
      width="100%"
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      {children}
    </Stack>
  );
};
