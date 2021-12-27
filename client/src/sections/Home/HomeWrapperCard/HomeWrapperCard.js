import { Box } from "@mui/material";
import React from "react";
import { SuiStack } from "../../../components";
import ExText from "../../../Examples/ExText/ExText";

const HomeWrapperCard = () => {
  return (
    <Box>
      <SuiStack.Column>
        <ExText.Subtitle />
      </SuiStack.Column>
    </Box>
  );
};

export default HomeWrapperCard;
