import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SuiLogo } from "..";
import { phoneFormat } from "../../util/cover/phoneFormat";

const SuiCard = () => {
  return <div></div>;
};

export default SuiCard;

SuiCard.Advise = function Advise() {
  return (
    <Stack
      width="100%"
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box
        width="fit-content"
        m={1}
        p={1}
        borderColor="yellow"
        border={2}
        borderRadius="50%"
      >
        <SuiLogo.Large />
      </Box>
      <Stack
        width="100%"
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Typography variant="h4">Tu van dang ky hoc</Typography>
        <Stack
          width="100%"
          direction="row"
          alignItems="flex-end"
          justifyContent="flex-start"
          spacing={1}
        >
          <Box>
            <SuiLogo.Small />
          </Box>
          <Typography variant="h4">{phoneFormat("0948616896")}</Typography>
        </Stack>

        <Stack
          width="100%"
          direction="row"
          alignItems="flex-end"
          justifyContent="flex-start"
          spacing={1}
        >
          <Box>
            <SuiLogo.Small />
          </Box>
          <Typography>asdasd</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
