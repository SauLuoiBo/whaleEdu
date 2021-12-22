import { MUItheme, StyledTheme } from "../assets/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StyledTheme>
      <MUItheme>
        <Component {...pageProps} />
      </MUItheme>
    </StyledTheme>
  );
}

export default MyApp;
