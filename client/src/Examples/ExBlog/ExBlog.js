import React from "react";
import { Box, Typography } from "@mui/material";
import { SuiStack, SuiAvatar, SuiBreak } from "../../components";
import { getAvatar } from "../../util/getLinkPublic/getLinkPublic";

const ExBlog = () => {
  return (
    <Box>
      <SuiStack.ColumnFlex>
        <SuiStack.Row>
          <SuiAvatar />
          <Typography variant="h4"> Thầy Nam Anh</Typography>
        </SuiStack.Row>
      </SuiStack.ColumnFlex>
      <Divider variant="inset" component="li" />
    </Box>
  );
};

export default ExBlog;

ExBlog.CardHome = function CardHome() {
  return (
    <Box
      sx={{
        cursor: "pointer",

        "&:hover": {
          transform: "scale(1.1)",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <SuiStack.ColumnFlex>
        <SuiStack.Row>
          <SuiAvatar src={getAvatar("daibo.png")} />
          <Typography variant="h2"> Thầy Nam Anh</Typography>
        </SuiStack.Row>

        <Typography variant="h4" maxWidth={260}>
          Kinh nghiệm tự ôn thi đại học môn Toán - Lý - Hoá một cách tốt nhất
        </Typography>
        <SuiBreak.Small />
        <SuiStack.Row>
          <Typography variant="h4"> MATH</Typography>
          <Typography variant="h4"> ||</Typography>
          <Typography variant="h4"> September - 2021</Typography>
        </SuiStack.Row>
      </SuiStack.ColumnFlex>
    </Box>
  );
};
