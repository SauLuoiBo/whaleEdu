import styled from "styled-components";
import React from "react";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 13rem;
`;
