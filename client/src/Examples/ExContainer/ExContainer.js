import { Stack, Typography } from "@mui/material";
import React from "react";
import { ExButton } from "..";
import { SuiButton, SuiCard } from "../../components";
import Link from "next/link";
import { LOGIN, SIGNUP } from "../../assets/contants";

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
        hệ sinh thái của 2499 thành viên tuyệt vời
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

ExContainer.Contact = function Contact() {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      spacing={0.5}
      border={2}
      borderColor="yellow"
      borderRadius={3}
      p={0}
      backgroundColor="text.main"
      overflow="hidden"
    >
      <Stack
        width="100%"
        direction="row"
        justifyContent="flex-start"
        p={1}
        backgroundColor="yellow"
      >
        <Typography variant="h4">Tu Van 24/7</Typography>
      </Stack>
      <SuiCard.Advise />
      <SuiCard.Advise />
      <SuiCard.Advise />
    </Stack>
  );
};
