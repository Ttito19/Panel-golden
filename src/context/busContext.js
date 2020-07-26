import React, { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "firebase";
import { SeatDesignContext } from "./seatDesignContext";
export const BusContext = createContext();
export const BusProvider = (props) => {
  const [bus, setBus] = useState([]);

  const requestUnsubscribe = snapshot => {
    const listBus = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBus(listBus);
  }

  useEffect(() => {
    const unsubscribe = firestore().collection("bus").onSnapshot(requestUnsubscribe);
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
