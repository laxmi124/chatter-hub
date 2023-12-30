import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
// import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider>
    {/* <ChatProvider> */}
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    {/* </ChatProvider> */}
  </ChakraProvider>,
  document.getElementById("root")
);

reportWebVitals();
