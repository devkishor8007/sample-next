import React from "react";
import { Provider } from "react-redux";
import store from "../redux";
import "../styles/globals.css";
import Navbar from "./navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
