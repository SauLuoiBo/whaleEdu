import { Box, Stack } from "@mui/material";

import Head from "next/head";

import { SuiContainer } from "../components";
import SuiHidden from "../components/SuiHidden/SuiHidden";
import SuiVisible from "../components/SuiVisible/SuiVisible";
import { ExContainer } from "../Examples";

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
            <Stack direction="column" spacing={2} width={300}>
              <ExContainer.SignUp />
              <ExContainer.SignUp />
              <ExContainer.SignUp />
              <ExContainer.SignUp />
            </Stack>
          </SuiHidden.lg>
          <Box sx={{ width: "100%" }}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={0.5}
              m={0}
            >
              <Stack direction="column" spacing={2} width={250}>
                <ExContainer.Advise />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </SuiContainer>
    </>
  );
}
