import React from "react";
import Head from "next/head";
import { SuiContainer } from "../../../components";
import { ExHeaderPage } from "../../../Examples";

const PhoThong = () => {
  return (
    <>
      <Head>
        <title>Whale Education - Ôn thi</title>
        <meta name="description" content="Whale Education - ôn thi" />
        <link rel="icon" href="/icons/logos/LogoWhale.svg" />
      </Head>
      <SuiContainer>
        <ExHeaderPage />
      </SuiContainer>
    </>
  );
};

export default PhoThong;
