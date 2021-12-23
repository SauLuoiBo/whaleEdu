import styled from "styled-components";
import React from "react";
import Header from "../sections/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 13rem;
  padding: 0 3rem;
`;
