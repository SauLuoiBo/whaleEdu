import { Box, Typography } from "@mui/material";

import React from "react";
import { SuiBreak, SuiStack } from "../../components";
import ExImage from "../ExImage/ExImage";

const ExCardSubject = () => {
  return (
    <Box
      bgcolor={"white.main"}
      borderRadius={4}
      border={"2px solid white"}
      overflow={"hidden"}
      width={"100%"}
      maxWidth={300}
      sx={{
        "&:hover": {
          transform: "scale(1.02)",
        },
        cursor: "pointer",
      }}
    >
      <SuiStack.ColumnFlex>
        <ExImage.CardSubject />
        <Box width={"90%"}>
          <SuiStack.ColumnFlex sx={{ m: 0.5 }}>
            <Typography variant="h3">
              Khoa luyen thi Dai hoc mon Toan 2021
            </Typography>
            <SuiBreak.Small />
            <SuiStack.Center>
              <Typography variant="h4">Giang vien: Nam Anh </Typography>
            </SuiStack.Center>
          </SuiStack.ColumnFlex>
        </Box>
      </SuiStack.ColumnFlex>
    </Box>
  );
};

export default ExCardSubject;

ExCardSubject.Excercise = function (props) {
  const { number, name, teacher } = props;
  return (
    <Box
      bgcolor={"white.main"}
      borderRadius={4}
      border={"2px solid white"}
      overflow={"hidden"}
      width={"100%"}
      maxWidth={300}
      sx={{
        "&:hover": {
          transform: "scale(1.02)",
        },
        cursor: "pointer",
      }}
    >
      <SuiStack.ColumnFlex>
        <ExImage.CardSubject />
        <Box width={"90%"}>
          <SuiStack.ColumnFlex sx={{ m: 0.5 }}>
            <Typography variant="h3">Đề số: {number || "1"}</Typography>
            <SuiBreak.Small />
            <Typography variant="h3">{name || "name"}</Typography>
            <SuiBreak.Small />
            <SuiStack.Center>
              <Typography variant="h4">
                biên soạn: {teacher || "thầy Nam Anh"}{" "}
              </Typography>
            </SuiStack.Center>
            <SuiStack.Center>
              <Typography variant="h4">File PDF</Typography>
              <Typography variant="h4">Lời giải</Typography>
              <Typography variant="h4">Video</Typography>
            </SuiStack.Center>
          </SuiStack.ColumnFlex>
        </Box>
      </SuiStack.ColumnFlex>
    </Box>
  );
};
