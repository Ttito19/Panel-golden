import { firestore } from "firebase";
import React, { createContext, useEffect } from "react";

const TravelContext = createContext();
const TravelProvider = ({ children }) => {

  const requestTravel = data => {
    data.docs.forEach(async (v,i) => {
      const travel = v.data();
      const { destiny } = travel;

      try {
        const bus = await firestore().collection("location").doc(destiny).get();
        if(bus.exists){      
          console.log(bus.data());
        }
      }catch(e){
        console.log(e);
      }
    })
  }

  useEffect(() => {
    const travelEvent = firestore().collection("travel").onSnapshot(requestTravel,console.log);
    return () => travelEvent();
  },[])

  return <TravelContext.Provider>
    { children }
  </TravelContext.Provider>
}

export {
  TravelContext,
  TravelProvider
}