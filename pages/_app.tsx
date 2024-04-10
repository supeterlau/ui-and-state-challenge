import "../styles/globals.css";
import "@interchain-ui/react/styles";

// import { ThemeProvider } from "@interchain-ui/react";

import type { AppProps } from "next/app";

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default CreateCosmosApp;
