import React from "react";
import { Stack, AppBar, Toolbar, Button } from "@mui/material";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import { ExButton, ExLogos } from "../../Examples";
import SuiHidden from "../../components/SuiHidden/SuiHidden";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
            <ExLogos />

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
