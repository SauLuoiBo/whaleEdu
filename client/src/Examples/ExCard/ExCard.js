import { Stack, Typography, Box } from "@mui/material";

import React from "react";
import { SuiLogo, SuiBreak, SuiStack, SuiAvatar } from "../../components";
import { phoneFormat } from "../../util/cover/phoneFormat";
import { getButton } from "../../util/getLinkPublic/getLinkPublic";
import { getAvatar } from "../../util/getLinkPublic/getLinkPublic";

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

ExCard.Exercise = function Exercise(props) {
  const { number, name, teacher, href, linkPDF } = props;
  return (
    <Box
      width={400}
      bgcolor={"white.main"}
      borderRadius={2}
      paddingX={1}
      paddingY={2}
      sx={{ "&:hover": { transform: "scale(1.01)" }, cursor: "pointer" }}
    >
      <SuiStack.RowFlex>
        <SuiAvatar />
        <SuiStack.ColumnFlex>
          <Typography variant="h3">????? s??? {number || "1"}:</Typography>
          <Typography variant="h3">{name || "name"}</Typography>
          <Typography variant="h3">
            Bi??n so???n: {teacher || "teacher"}
          </Typography>
          <SuiBreak.Medium />
        </SuiStack.ColumnFlex>
      </SuiStack.RowFlex>
      <SuiStack.Center>
        <Typography>T???i file PDF</Typography>
        <Typography>L???i gi???i</Typography>
        <Typography>Video ch???a</Typography>
      </SuiStack.Center>
    </Box>
  );
};
