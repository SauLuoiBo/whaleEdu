import React from "react";
import { Box, TextField } from "@mui/material";

const SuiTextField = () => {
  return (
    <Box component="form" noValidate autoComplete="off" width={"100%"}>
      <TextField
        id="outlined-basic"
        label="Số điện thoại"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default SuiTextField;
