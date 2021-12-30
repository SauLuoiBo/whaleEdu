import React from "react";

import Head from "next/head";
import { SuiContainer } from "../../../components";
import ExCardSubject from "../../../Examples/ExCardSubject/ExCardSubject";
import { ExHeaderPage } from "../../../Examples";
import Link from "next/link";

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
      <SuiContainer>
        <ExHeaderPage
          title="Đề thi vào lớp 10"
          content="Tổng hợp các đề thi vào lớp 10 của Hà Nội, Hồ Chí Minh và các địa phương khác. Các bộ đề thi được biên soạn bởi đội ngũ giáo viên giàu kinh nghiệm và nhiệt huyết cả Whale Edu với lời giải chi tiết."
        />
      </SuiContainer>
      <SuiContainer>
        <Link href={"toan"} replace>
          adsdasasd
        </Link>
      </SuiContainer>
    </>
  );
};

export default DeThiVaoMuoi;
