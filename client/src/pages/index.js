import { Box, Stack } from "@mui/material";

import Head from "next/head";

import { SuiContainer } from "../components";
import SuiHidden from "../components/SuiHidden/SuiHidden";

import { ExContainer } from "../Examples";
import { HomeBanner } from "../sections/Home";

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
          <SuiHidden.lg>
            <Stack direction="column" spacing={2} width={260}>
              <ExContainer.SignUp />
              <ExContainer.SignUp />
              <ExContainer.SignUp />
              <ExContainer.SignUp />
            </Stack>
          </SuiHidden.lg>
          {/* left */}
          <Box sx={{ width: "100%", overflow: "hidden" }}>
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
            {/* <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs={8}>
                <HomeBanner />
              </Grid>
              <Grid item minWidth={270}>
                <Stack direction="column" spacing={2}>
                  <ExContainer.Advise />
                </Stack>
              </Grid>
            </Grid> */}
          </Box>
        </Stack>
      </SuiContainer>
    </>
  );
}
