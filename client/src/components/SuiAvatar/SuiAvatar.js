import React from "react";
import Avatar from "@mui/material/Avatar";

const SuiAvatar = (props) => {
  const { size, alt, src } = props;
  return (
    <>
      <Avatar
        alt={alt || "avatar"}
        src={src || "/vercel.svg"}
        variant="round"
        sizes={size || 30}
      />
    </>
  );
};

export default SuiAvatar;
