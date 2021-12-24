import React from "react";
import { SuiContainer } from "../../components";
import SuiBreak from "../../components/SuiBreak/SuiBreak";
import { ExContainer } from "../../Examples";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#7BC8F3", height: "fit-content" }}>
      <SuiBreak xs={10} lg={30} />
      <SuiContainer>
        <ExContainer.GetStart />
      </SuiContainer>
      <SuiBreak xs={10} lg={30} />
    </footer>
  );
};

export default Footer;
