import React, { useContext } from "react";
import { AccountContext } from "../context/accountContext";
import Router from "./router/index";
const App = () => {
  const { isLoadingInformation } = useContext(AccountContext);

  if (isLoadingInformation) return <></>
  else return <Router />;
}

export default App;
