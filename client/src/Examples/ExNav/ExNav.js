import { Stack } from "@mui/material";
import React from "react";
import { ExMenu } from "..";
import { SuiHidden, SuiVisible } from "../../components";
import { learnPageMenu } from "../../data/dataLearnPage";

const ExNav = ({ children }) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={{ lg: 2, sx: 0 }}
    >
      {children}
    </Stack>
  );
};

export default ExNav;

ExNav.NavMenu = function NavMenu({ children }) {
  return (
    <SuiHidden.lg>
      <Stack direction="column" spacing={2} width={220} minWidth={220}>
        {children}
      </Stack>
    </SuiHidden.lg>
  );
};

ExNav.NavMenuLearn = function NavMenuLearn() {
  return (
    <ExNav.NavMenu>
      {learnPageMenu.map((item, i) => {
        return <ExMenu key={i} menu={item.menu} title={item.title} />;
      })}
    </ExNav.NavMenu>
  );
};

ExNav.NavMenuTest10 = function NavMenuTest10() {
  return (
    <ExNav.NavMenu>
      {learnPageMenu.map((item, i) => {
        return <ExMenu key={i} menu={item.menu} title={item.title} />;
      })}
    </ExNav.NavMenu>
  );
};
