import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SuiLogo, SuiBreak, SuiStack } from "../../components";
import { phoneFormat } from "../../util/cover/phoneFormat";
import { getButton } from "../../util/getLinkPublic/getLinkPublic";

const ExCard = () => {
  return <div></div>;
};

export default ExCard;

ExCard.Advise = function Advisee(props) {
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
        <Typography variant="h3">{advise || "advise"}</Typography>
        <SuiBreak.Small />

        <SuiStack.Row sx={{ cursor: "pointer" }}>
          <Box>
            <SuiLogo.Smallest src={getButton("phoneSmall.svg")} />
          </Box>
          <a href={`tel:${phone || "0948616896"}`}>
            <Typography variant="h4">
              {phoneFormat(phone || "0948616896")}
            </Typography>
          </a>
        </SuiStack.Row>
        <SuiBreak.Small />
        <SuiStack.Row sx={{ cursor: "pointer" }}>
          <Box>
            <SuiLogo.Smallest src={getButton("fbSmall.svg")} />
          </Box>
          <a href={fblink} target="_blank" rel="noreferrer">
            <Typography variant="h4">{fbname}</Typography>
          </a>
        </SuiStack.Row>
      </SuiStack.ColumnFlex>
    </Stack>
  );
};
