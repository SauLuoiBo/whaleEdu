import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s linear;
  }
  *:focus {
  outline: 0;
  outline: none;
  }
  html {
    font-size: 62.5%;
    background-color: #eef0f1;
    box-sizing: border-box;
    @media ${(props) => props.theme.breakpoints.lg} {
      font-size: 60%;
    }
    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 55%;
    }
  }
  body {
    /* font-family: ${(props) => props.theme.fonts.main}; */
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    /* color: ${(props) => props.theme.colors.primary1}; */
    text-decoration: none;
    /* text-transform: capitalize; */
    transition: all .2s linear;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;


    .container{
      padding: 0 30rem;

      @media ${(props) => props.theme.breakpoints.xl} {
        padding: 0 15rem;
    }

      @media ${(props) => props.theme.breakpoints.lg} {
        padding: 0 10rem;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0 5rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0 1rem;
    }
    }
  }

`;
