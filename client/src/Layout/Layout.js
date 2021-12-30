import styled from "styled-components";
import React from "react";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";
import { SuiBox, SuiContainer } from "../components";
import { Box, Stack } from "@mui/material";
import { homePageMenu } from "../data/dataHomePage";
import { ExContainer, ExMenu, ExNav } from "../Examples";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <SuiContainer>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={{ lg: 2, sx: 0 }}
          >
            <ExNav.NavMenu>
              <ExContainer.SignUp />
              {homePageMenu.map((item, i) => {
                return <ExMenu key={i} menu={item.menu} title={item.title} />;
              })}
            </ExNav.NavMenu>
            <SuiBox.Center>{children}</SuiBox.Center>
          </Stack>
        </SuiContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 13rem;
`;
