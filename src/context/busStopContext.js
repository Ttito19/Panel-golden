import React, { createContext, useEffect, useState } from "react";
import { useFirebaseApp } from "reactfire";
export const BusStopContext = createContext();

export const BusStopProvider = (props) => {
  const [busStop, setBusStop] = useState([]);
  const { firestore } = useFirebaseApp();
  useEffect(() => {
    const unsubscribe = firestore()
      .collection("busStop")
      .onSnapshot((snapshot) => {
        const listBusStop = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBusStop(listBusStop);
      });

    return () => unsubscribe();
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
