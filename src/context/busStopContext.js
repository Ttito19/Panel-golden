import React, { createContext, useEffect, useState } from "react";
import { firestore } from "firebase";
export const BusStopContext = createContext();
export const BusStopProvider = (props) => {
  const [busStop, setBusStop] = useState([]);
  useEffect(() => {
    // const fire = firestore();
    var db = firestore();
    db.collection("busStop").onSnapshot((snapshot) => {
      const listBusStop = snapshot.docs.map((doc) => ({
        
        id: doc.id,
        ...doc.data(),
      }));
      setBusStop(listBusStop);
    });

    // return () => fire();
  }, []);
  const deleteBusStop = (id) => {
    firestore().collection("busStop").doc(id).delete().catch(console.log);
  };
  return (
    <BusStopContext.Provider value={{ busStop, deleteBusStop }}>
      {props.children}
    </BusStopContext.Provider>
  );
};
