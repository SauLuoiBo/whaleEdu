import { MUItheme, StyledTheme } from "../assets/theme";
import { Layout } from "../Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StyledTheme>
      <MUItheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MUItheme>
    </StyledTheme>
  );
}

export default MyApp;
