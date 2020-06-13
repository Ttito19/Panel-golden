import React, { Suspense } from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import { AccountProvider } from "./context/accountContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./providers/firebase";
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={"Conectando la App..."}>
      <AccountProvider>
        <App />
      </AccountProvider>
    </Suspense>
  </FirebaseAppProvider>,

  document.getElementById("root")
);
