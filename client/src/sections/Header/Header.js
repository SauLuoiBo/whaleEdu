import React from "react";
import { Stack, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { ExButton, ExLogos } from "../../Examples";
import SuiHidden from "../../components/SuiHidden/SuiHidden";
import { Icon } from "@mui/material";
import SuiVisible from "../../components/SuiVisible/SuiVisible";
import { useRouter } from "next/router";
import { SuiContainer } from "../../components";

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

// useEffect will run on stageCanvasRef value assignment

//header

const Header = () => {
  const router = useRouter().push;

  return (
    <HideOnScroll>
      <AppBar sx={{ backgroundColor: "text.main", py: 2 }}>
        <SuiContainer>
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

              <ExLogos.LongLogo onClick={() => router("/")} />
            </Stack>

            <Stack direction="row" spacing={2}>
              <SuiHidden>
                <ExButton.Text text="Đăng nhập" href="/login" />
              </SuiHidden>
              <ExButton text="Tạo tài khoản" href="/signup" />
            </Stack>
          </Stack>
        </SuiContainer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
