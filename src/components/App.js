import React, { useContext, Fragment } from "react";
import { AccountContext } from "../context/accountContext";
import Router from "./router/index";
import { useFirebaseApp } from "reactfire";

function App() {
  const firebase = useFirebaseApp();
//   firebase
//   .firestore()
//   .collection("items")
//   .add({
// 	name: "Heineken",
// 	type: "beer",
// 	qty: 5,
// 	description:
// 	  "Pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International",
//   })
//   .then(ref => {
// 	console.log("Added document with ID: ", ref.id)
//   })

  const { isLoadingInformation } = useContext(AccountContext);

  if (isLoadingInformation) return <div>....</div>;
  else return <Router />;
}

export default App;
