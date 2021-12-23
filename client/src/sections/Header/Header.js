import React from "react";
import { Stack, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import { ExButton, ExLogos } from "../../Examples";
import SuiHidden from "../../components/SuiHidden/SuiHidden";
import { Icon } from "@mui/material";
import SuiVisible from "../../components/SuiVisible/SuiVisible";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  return (
    <HideOnScroll>
      <AppBar sx={{ backgroundColor: "text.main", py: 2 }}>
        <Toolbar>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Stack direction="row" spacing={0.5}>
              <SuiVisible.md>
                <Icon fontSize="large">add_circle</Icon>
              </SuiVisible.md>
              <ExLogos />
            </Stack>

            <Stack direction="row" spacing={2}>
              <SuiHidden>
                <ExButton.Text text="Đăng nhập" />
              </SuiHidden>
              <ExButton text="Tạo tài khoản" />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
