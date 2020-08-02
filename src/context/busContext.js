import React, { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "firebase";
import useRemoveThis from "../hooks/useRemoveThis";

export const BusContext = createContext();
export const BusProvider = (props) => {
  const [bus, setBus] = useState([]);
  const question = useRemoveThis();

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

  const updateActive = async (id,state = "Si") => {
    const ref = firestore().collection('bus');

    console.log(state);

    try{
      switch(state) {
        case "Si":
          await ref.doc(id).update({ active : false });
          break;
        case "No":
          await ref.doc(id).update({ active : true });
          break;
      }
    }catch(e){
      console.log(e);
    }
  }

  const deleteBus = async (id) => {
    const security = await question();
    if(security){
      await firestore().collection("bus").doc(id).delete();
    }
  };

  return (
    <BusContext.Provider value={{ bus, deleteBus , updateActive }}>
      {props.children}
    </BusContext.Provider>
  );
};
