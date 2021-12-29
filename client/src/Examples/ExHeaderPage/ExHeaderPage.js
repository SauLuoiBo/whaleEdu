import { Box, Typography } from "@mui/material";
import React from "react";
import { SuiBreak, SuiStack } from "../../components";

const ExHeaderPage = (props) => {
  const { title, content } = props;
  return (
    <Box
      width={"100%"}
      borderRadius={4}
      px={3}
      bgcolor={"white.main"}
      borderTop={"16px solid black"}
    >
      <SuiBreak.Medium />
      <Box maxWidth={700}>
        <SuiStack.ColumnFlex>
          <Typography variant="h1">{title || "title"}</Typography>
          <SuiBreak.Small />
          <Typography variant="h3">{content || "content"}</Typography>
        </SuiStack.ColumnFlex>
      </Box>
      <SuiBreak.Medium />
    </Box>
  );
};

export default ExHeaderPage;
