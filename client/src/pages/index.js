import { Box, Stack } from "@mui/material";

import Head from "next/head";

import { SuiBreak, SuiContainer } from "../components";
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
      <SuiContainer>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={{ lg: 2, sx: 0 }}
        >
          {/* <SuiHidden.lg>
            <Stack direction="column" spacing={2} width={220}>
              <ExContainer.SignUp />
              {homePageMenu.map((item, i) => {
                return <ExMenu key={i} menu={item.menu} title={item.title} />;
              })}
            </Stack>
          </SuiHidden.lg> */}
          <ExNav.NavMenu>
            <ExContainer.SignUp />
            {homePageMenu.map((item, i) => {
              return <ExMenu key={i} menu={item.menu} title={item.title} />;
            })}
          </ExNav.NavMenu>
          {/* left */}
          <Box sx={{ width: "100%", overflow: "hidden" }}>
            {/* Section 1 */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
              m={0}
            >
              <Stack
                width={"100%"}
                sx={{ overflow: "hidden" }}
                overflow={"hidden"}
              >
                <HomeBanner />
              </Stack>
              <Box minWidth={{ xs: "100%", md: 270 }}>
                <Stack direction="column" spacing={2}>
                  <ExContainer.Advise />
                </Stack>
              </Box>
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
              <Stack
                width={"100%"}
                sx={{ overflow: "hidden" }}
                overflow={"hidden"}
              >
                <HomeWrapperCard
                  subtitle="Kiến thức thi đại học"
                  describe="dsaijsda ioajd joiasdio joiasdji jaiosdjoidaj oiadjsiojo sdk kjsjd jkasdh kjhas"
                />
                <HomeWrapperCard subtitle="Kiến thức thi vào 10" />
                <HomeWrapperCard subtitle="Kiến thức phổ thông" />
              </Stack>
              <Box minWidth={{ xs: "100%", md: 270 }}>
                <Stack direction="column" spacing={2}>
                  <HomeKeyBlog />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </SuiContainer>
    </>
  );
}
