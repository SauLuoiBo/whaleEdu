import React from "react";
import { SuiStack } from "../../../components";
import { ExLogos } from "../../../Examples";
import { Box } from "@mui/material";

const HomeKeyBlog = () => {
  return (
    <SuiStack.ColumnFlex sx={{ p: 2 }}>
      <Box>
        <SuiStack.ColumnFlex>
          <SuiStack.Row>
            <ExLogos.SmallLogo />
          </SuiStack.Row>
        </SuiStack.ColumnFlex>
      </Box>
    </SuiStack.ColumnFlex>
  );
};

export default HomeKeyBlog;
