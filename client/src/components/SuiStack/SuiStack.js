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

SuiStack.RowFlex = function RowFlex({ children, sx }) {
  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing={1}
      sx={sx}
    >
      {children}
    </Stack>
  );
};

SuiStack.ColumnFlex = function ColumnFlex({ children, sx, spacing }) {
  return (
    <Stack
      width="100%"
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing={spacing || "0"}
      sx={sx}
    >
      {children}
    </Stack>
  );
};

SuiStack.Column = function Column({ children, sx }) {
  return (
    <Stack
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      mx="auto"
      sx={sx}
    >
      {children}
    </Stack>
  );
};

SuiStack.Center = function Center({ children, sx }) {
  return (
    <Stack
      width={"100%"}
      direction="row"
      alignItems="flex-start"
      justifyContent="space-between"
      spacing={1}
      flexWrap="wrap"
      sx={sx}
    >
      {children}
    </Stack>
  );
};

SuiStack.AutoWrap = function AutoWrap({ children, sx }) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      m={0}
    >
      {children}
    </Stack>
  );
};
