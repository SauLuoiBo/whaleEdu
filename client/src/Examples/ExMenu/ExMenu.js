import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { SuiBreak, SuiLine, SuiLogo, SuiStack } from "../../components";
import { getMenu } from "../../util/getLinkPublic/getLinkPublic";

const ExMenu = (props) => {
  const { title, menu } = props;

  var data;
  {
    menu
      ? (data = menu.map((data, i) => {
          return (
            <ExMenu.Card
              key={i}
              text={data.text}
              href={data.href}
              src={getMenu(data.icon)}
            />
          );
        }))
      : null;
  }
  return (
    <Box width={"100%"}>
      <SuiStack.ColumnFlex>
        <Typography variant="h2"> {title || "title"}</Typography>
        <SuiBreak.Small />
        <SuiStack.ColumnFlex spacing={1}>{data}</SuiStack.ColumnFlex>
      </SuiStack.ColumnFlex>
      <SuiBreak.Small />
      <SuiLine color="gray" px="0.5" sx={{ opacity: 0.5 }} />
    </Box>
  );
};

export default ExMenu;

ExMenu.Card = function Card(props) {
  const { href, text, src } = props;
  return (
    <Button variant="text" href={href || "/"} sx={{ width: "100%" }}>
      <SuiStack.Row>
        <SuiLogo.Menu src={src} />
        <Typography
          variant="h3"
          textOverflow={"hidden"}
          sx={{ textTransform: "none" }}
        >
          {text || "text"}
        </Typography>
      </SuiStack.Row>
    </Button>
  );
};

ExMenu.Change = function Card(props) {
  const { onClick, text, src } = props;
  return (
    <Button variant="text" onClick={onClick} sx={{ width: "100%" }}>
      <SuiStack.Row>
        <SuiLogo.Menu src={src} />
        <Typography
          variant="h3"
          textOverflow={"hidden"}
          sx={{ textTransform: "none" }}
        >
          {text || "text"}
        </Typography>
      </SuiStack.Row>
    </Button>
  );
};
