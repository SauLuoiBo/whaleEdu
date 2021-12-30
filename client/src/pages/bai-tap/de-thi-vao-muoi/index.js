import React from "react";
import Head from "next/head";
import { SuiBreak, SuiStack } from "../../../components";
import {
  ExCard,
  ExContainer,
  ExHeaderPage,
  ExMenu,
  ExNav,
} from "../../../Examples";
import { Box, Stack } from "@mui/material";

import { WrapperExercise } from "../../../sections/Exercise";

const DeThiVaoMuoi = () => {
  return (
    <>
      <Head>
        <title>Whale - Đề thi vào lớp mười </title>
        <meta
          name="description"
          content="Whale Education - Đề thi vào lớp mười"
        />
        <link rel="icon" href="/icons/logos/LogoWhale.svg" />
      </Head>

      <ExHeaderPage
        title="Đề thi vào lớp 10"
        content="Tổng hợp các đề thi vào lớp 10 của Hà Nội, Hồ Chí Minh và các địa phương khác. Các bộ đề thi được biên soạn bởi đội ngũ giáo viên giàu kinh nghiệm và nhiệt huyết cả Whale Edu với lời giải chi tiết, đầy đủ các môn Toán, Văn, Anh và các môn bổ sung."
      />

      <SuiBreak.Small />

      <SuiStack.AutoWrap>
        <Stack width={"100%"} sx={{ overflow: "hidden" }} overflow={"hidden"}>
          <WrapperExercise />
        </Stack>

        <Box minWidth={{ xs: "100%", md: 270 }}>
          <ExContainer.Advise />
        </Box>
      </SuiStack.AutoWrap>
    </>
  );
};

export default DeThiVaoMuoi;
