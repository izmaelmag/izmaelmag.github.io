import "../styles/globals.css";
import "../styles/animations.css";
import type { AppProps } from "next/app";

if ("paintWorklet" in CSS) {
  // @ts-ignore
  CSS.paintWorklet.addModule(
    "https://www.unpkg.com/css-houdini-squircle@0.1.3/squircle.min.js"
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
