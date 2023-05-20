import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import { AppProps } from "next/app";

interface CustomPageProps {
  // <--- your custom page props
  // your props
}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  //   ^^^ use your custom props here
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer className="h-24 overflow-scroll" />
    </>
  );
}

export default MyApp;
