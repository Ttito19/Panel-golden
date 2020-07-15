import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

//Context
import { AccountProvider } from "./context/accountContext";

//Database
import "./providers/database";

render(
  <AccountProvider>
    <App />
  </AccountProvider>,
  document.getElementById("root")
);
