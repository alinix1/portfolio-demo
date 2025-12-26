import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
