import React from "react";
import { SuiStack } from "../../../components";
import { ExLogos } from "../../../Examples";
import { Box, Typography } from "@mui/material";
import SuiAvatar from "../../../components/SuiAvatar/SuiAvatar";
import { getAvatar } from "../../../util/getLinkPublic/getLinkPublic";

const HomeKeyBlog = () => {
  return (
    <SuiStack.ColumnFlex sx={{ p: 2 }}>
      <Box>
        <SuiStack.ColumnFlex>
          <SuiStack.Row>
            <SuiAvatar src={getAvatar("daibo.png")} />
            <Typography variant="h4"> Thầy Nam Anh</Typography>
          </SuiStack.Row>
        </SuiStack.ColumnFlex>
      </Box>
    </SuiStack.ColumnFlex>
  );
};

export default HomeKeyBlog;
