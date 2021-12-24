import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SuiLogo } from "..";
import { phoneFormat } from "../../util/cover/phoneFormat";
import SuiBreak from "../SuiBreak/SuiBreak";
import SuiStack from "../SuiStack/SuiStack";

const SuiCard = () => {
  return <div></div>;
};

export default SuiCard;

SuiCard.Advise = function Advise(props) {
  const { advise, phone, fb } = props;

  let fblink = `http://facebook.com/${fb || "daido.bo"}`;

  let fbname = `m/${fb || "sauluoi"}`;

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
      <SuiStack.ColumnFlex>
        <Typography variant="h4">{advise || "advise"}</Typography>
        <SuiBreak.Small />

        <SuiStack.Row sx={{ cursor: "pointer" }}>
          <Box>
            <SuiLogo.Small />
          </Box>
          <a href={`tel:${phone}`}>
            <Typography variant="h4">
              {phoneFormat(phone || "0948616896")}
            </Typography>
          </a>
        </SuiStack.Row>
        <SuiStack.Row sx={{ cursor: "pointer" }}>
          <Box>
            <SuiLogo.Small />
          </Box>
          <a href={fblink} target="_blank">
            <Typography variant="h4">{fbname}</Typography>
          </a>
        </SuiStack.Row>
      </SuiStack.ColumnFlex>
    </Stack>
  );
};
