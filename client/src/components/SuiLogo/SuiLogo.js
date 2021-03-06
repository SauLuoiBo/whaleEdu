import React from "react";
import Avatar from "@mui/material/Avatar";

const SuiLogo = (props) => {
  const { w, h, alt, src } = props;
  const sizes = { width: w, height: h };
  return (
    <>
      <Avatar
        alt={alt || "logo"}
        src={src || "/vercel.svg"}
        sx={{ ...sizes }}
        variant="square"
      />
    </>
  );
};

export default SuiLogo;

SuiLogo.Smallest = function Small(props) {
  const { size, alt, src } = props;
  const sizes = { width: 15 || size, height: 15 || size };
  return (
    <>
      <Avatar
        alt={alt || "logo"}
        src={src || "/vercel.svg"}
        sx={{ ...sizes }}
        variant="square"
      />
    </>
  );
};

SuiLogo.Small = function Small(props) {
  const { size, alt, src } = props;
  const sizes = { width: 24 || size, height: 24 || size };
  return (
    <>
      <Avatar
        alt={alt || "logo"}
        src={src || "/vercel.svg"}
        sx={{ ...sizes }}
        variant="square"
      />
    </>
  );
};

SuiLogo.Medium = function Large(props) {
  const { size, alt, src } = props;
  const sizes = { width: 45 || size, height: 45 || size };
  return (
    <>
      <Avatar
        alt={alt || "logo"}
        src={src || "/vercel.svg"}
        sx={{ ...sizes }}
        variant="square"
      />
    </>
  );
};

SuiLogo.Large = function Large(props) {
  const { size, alt, src } = props;
  const sizes = { width: 60 || size, height: 60 || size };
  return (
    <>
      <Avatar
        alt={alt || "logo"}
        src={src || "/vercel.svg"}
        sx={{ ...sizes }}
        variant="square"
      />
    </>
  );
};

SuiLogo.Menu = function Large(props) {
  const { size, alt, src } = props;
  const sizes = { width: 35 || size, height: 35 || size };
  return (
    <>
      <Avatar
        alt={alt || "menu"}
        src={src || "/vercel.svg"}
        sx={{ ...sizes }}
        variant="square"
      />
    </>
  );
};

// SuiLogo.Small = function Small(props) {
//   const { size, alt, src } = props;
//   const sizes = { width: 20 || size, height: 20 || size };
//   return (
//     <>
//       <Avatar
//         alt={alt || "logo"}
//         src={src || "/vercel.svg"}
//         sx={{ ...sizes }}
//         variant="square"
//       />
//     </>
//   );
// };
