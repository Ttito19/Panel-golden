import React, { createContext, useEffect, useState } from "react";
import { useFirebaseApp } from "reactfire";
export const BusContext = createContext();
export const BusProvider = (props) => {
  const { firestore } = useFirebaseApp();
  const [bus, setBus] = useState([]);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection("bus")
      .onSnapshot((snapshot) => {
        const listBus = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBus(listBus);
      });
    return () => unsubscribe();
  }, []);
  const deleteBus = (id) => {
    firestore().collection("bus").doc(id).delete();
  };
  return (
    <BusContext.Provider value={{ bus, deleteBus }}>
      {props.children}
    </BusContext.Provider>
  );
};
