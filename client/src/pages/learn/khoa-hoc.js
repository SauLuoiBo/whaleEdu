import React from "react";
import Head from "next/head";
import { SuiBreak, SuiContainer, SuiStack } from "../../components";
import { ExHeaderPage, ExNav } from "../../Examples";
import { CoursesWrapper } from "../../sections/Courses";
import { Stack } from "@mui/material";

const Courses = () => {
  return (
    <>
      <Head>
        <title>Whale Education - Khoá học </title>
        <meta name="description" content="Whale Education - ôn thi" />
        <link rel="icon" href="/icons/logos/LogoWhale.svg" />
      </Head>
      <SuiContainer>
        <ExHeaderPage title="Ôn thi đại học" content="đầy đủ ..." />
      </SuiContainer>
      <SuiBreak.Medium />
      <SuiContainer>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={{ lg: 2, sx: 0 }}
        >
          <ExNav>
            <ExNav.NavMenuLearn />
          </ExNav>
          <SuiStack.Column>
            <CoursesWrapper subtitle="Môn Toán" />
            <CoursesWrapper subtitle="Môn Tiếng Anh" />
          </SuiStack.Column>
        </Stack>
      </SuiContainer>
    </>
  );
};

export default Courses;
