import React from "react";
import "./styles/globals.scss";
import { OrderProvider } from "../components/OrderContext";

const App = ({ Component, pageProps }) => {
  return (
    <OrderProvider>
      <Component {...pageProps} />
    </OrderProvider>
  );
};

export default App;
