import { Box, Stack } from "@mui/material";

import Head from "next/head";

import { SuiBox, SuiBreak, SuiContainer } from "../components";
import SuiHidden from "../components/SuiHidden/SuiHidden";

import { ExContainer, ExMenu, ExNav } from "../Examples";
import { HomeBanner, HomeKeyBlog, HomeWrapperCard } from "../sections/Home";
import { homePageMenu } from "../data/dataHomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Whale Education </title>
        <meta name="description" content="Whale Education" />
        <link rel="icon" href="/icons/logos/LogoWhale.svg" />
      </Head>

      {/* Section 1 */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        m={0}
      >
        <Stack width={"100%"} sx={{ overflow: "hidden" }} overflow={"hidden"}>
          <HomeBanner />
        </Stack>
        <SuiBox.Right>
          <Stack direction="column" spacing={2}>
            <ExContainer.Advise />
          </Stack>
        </SuiBox.Right>
      </Stack>

      {/* section 2 */}
      <SuiBreak.Large />
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        m={0}
      >
        <Stack width={"100%"} sx={{ overflow: "hidden" }} overflow={"hidden"}>
          <HomeWrapperCard
            subtitle="Kiến thức thi đại học"
            describe="dsaijsda ioajd joiasdio joiasdji jaiosdjoidaj oiadjsiojo sdk kjsjd jkasdh kjhas"
          />
          <HomeWrapperCard subtitle="Kiến thức thi vào 10" />
          <HomeWrapperCard subtitle="Kiến thức phổ thông" />
        </Stack>
        <SuiBox.Right>
          <Stack direction="column" spacing={2}>
            <HomeKeyBlog />
          </Stack>
        </SuiBox.Right>
      </Stack>
    </>
  );
}
