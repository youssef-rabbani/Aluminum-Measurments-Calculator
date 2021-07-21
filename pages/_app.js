// import App from 'next/app'
import React from "react";
import AppBar from "../components/appBar";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <div dir="rtl">
        <ThemeProvider theme={theme}>
          <AppBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
