import { Box, Stack, Divider } from "@mui/material";
import React from "react";
import { SuiBreak, SuiStack, SuiLine } from "../../../components";
import { ExHeaderPage, ExText } from "../../../Examples";
import ExCardSubject from "../../../Examples/ExCardSubject/ExCardSubject";

const CoursesWrapper = (props) => {
  const { subtitle, describe } = props;
  return (
    <Box px={{ xs: 2, md: 0 }} width={"100%"}>
      <SuiStack.Column>
        <ExText.Subtitle text={subtitle} />
        <SuiBreak.Small />
        <Box maxWidth={400}>
          <ExText.Describe text={describe} />
        </Box>
        <SuiBreak.Medium />
        <Box width={"100%"}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <ExCardSubject />
            <ExCardSubject />
            <ExCardSubject />
            <ExCardSubject />
            <ExCardSubject />
          </Stack>
        </Box>
      </SuiStack.Column>
      <SuiBreak.Medium />
      <SuiLine />
      <SuiBreak.Small />
    </Box>
  );
};

export default CoursesWrapper;
