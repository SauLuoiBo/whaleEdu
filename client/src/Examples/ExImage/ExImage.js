import React from "react";
import { SuiLogo } from "../../components";
import {
  getBanner,
  getCardSubject,
} from "../../util/getLinkPublic/getLinkPublic";

const ExImage = () => {
  return <SuiLogo h={"auto"} w={"100%"} src={getBanner("banner01_doc.svg")} />;
};

export default ExImage;

ExImage.CardSubject = function CardSubject() {
  return <SuiLogo h={"auto"} w={"100%"} src={getCardSubject("math1.svg")} />;
};
