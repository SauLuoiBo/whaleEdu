import { Stack, Typography } from "@mui/material";
import React from "react";
import { SuiButton, SuiCard, SuiLogo } from "../../components";
import Link from "next/link";
import { LOGIN, SIGNUP } from "../../assets/contants";
import { numberFormat } from "../../util/cover/numberFormat";
import SuiBreak from "../../components/SuiBreak/SuiBreak";
import { Box } from "@mui/system";

const ExContainer = ({ children }) => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing={0.5}>
      {children}
    </Stack>
  );
};

export default ExContainer;

ExContainer.SignUp = function SignUp() {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      spacing={0.5}
      borderRadius={3}
      p={1}
      backgroundColor="text.main"
    >
      <Typography variant="h3">
        <span style={{ color: "blue" }}> Hệ sinh thái Whale Edu {""}</span> là
        hệ sinh thái của {numberFormat("2499")} thành viên tuyệt vời
      </Typography>
      <Typography variant="h3">
        Cùng tham gia và học tập trong thế giới của Whale Education
      </Typography>
      <Link href={LOGIN}>
        <SuiButton.Full text="Đăng nhập" />
      </Link>
      <Link href={SIGNUP}>
        <SuiButton.Full text="Đăng ký" />
      </Link>
    </Stack>
  );
};

ExContainer.Advise = function Contact() {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      spacing={0.5}
      border={2}
      borderColor="yellow"
      borderRadius={3}
      p={0}
      backgroundColor="white.main"
      overflow="hidden"
    >
      <Stack
        width="100%"
        direction="row"
        justifyContent="flex-start"
        p={1}
        backgroundColor="yellow"
      >
        <Stack direction="row" alignItems="flex-end" spacing={0.5}>
          <SuiLogo.Small />
          <Typography variant="h4">Tư vấn 24/7</Typography>
        </Stack>
      </Stack>
      <SuiCard.Advise
        advise="Tư vấn đăng ký học"
        fb="daido.bo"
        phone={"0948616896"}
      />
      <SuiCard.Advise advise="Tư vấn môn toán" fb="daido.bo" />
      <SuiCard.Advise advise="Tư vấn môn tiếng anh" fb="daido.bo" />
    </Stack>
  );
};

ExContainer.GetStart = function GetStart() {
  return (
    <Stack
      width="100%"
      px={{ xs: 5, lg: 30 }}
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign={"center"}
    >
      <Typography variant="h2">Nhận tư vấn học</Typography>
      <Typography>
        Nếu có bất kỳ thắc mắc nào về chương trình học tại Whale Education, để
        lại số điện thoại để nhận tư vấn
      </Typography>
      <SuiBreak xs={10} />
      <Stack maxWidth={300} direction={"row"} justifyContent={"center"}>
        <Box>dsda</Box>
        <SuiButton text="Tu vans" />
      </Stack>
    </Stack>
  );
};
