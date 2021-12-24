import React from "react";
import { Stack } from "@mui/material";

const SuiContainer = ({ children }) => {
  return (
    <Stack
      direction="column"
      width="100%"
      sx={{ px: { xs: 0.5, sm: 1, md: 3, lg: 5, xl: 8, xxl: 10 } }}
    >
      {children}
    </Stack>
  );
};

export default SuiContainer;
