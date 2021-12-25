import React from "react";
import { Icon } from "@mui/material";

const SuiIcon = ({ onClick, icon }) => {
  return (
    <Icon onClick={onClick} sx={{ cursor: "pointer", color: "red" }}>
      {icon || "star"}
    </Icon>
  );
};

export default SuiIcon;
