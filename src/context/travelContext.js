import { firestore } from "firebase";
import React, { createContext, useEffect, useState } from "react";

const TravelContext = createContext();
const TravelProvider = ({ children }) => {
  const [ loadingTravel , setLoadingTravel ] = useState(true);
  const [ travelData , setTravelData ] = useState([]);

  //Context

  const requestTravel = data => {
    data.docs.forEach(async v => {
      try{
        const data = v.data();
        const { busId , destiny , driverId } = data;

        //Location
        const refLocation = firestore().collection("location");
        const reqDestiny = await refLocation.doc(destiny).get();
        const dataDestiny = reqDestiny.data();

        //Bus
        const refBus = firestore().collection("bus");
        const reqBus = await refBus.doc(busId).get();
        const dataBus = reqBus.data();

        //Chofer
        const refDriver = firestore().collection("driver");
        const reqDriver = await refDriver.doc(driverId).get();
        const dataDriver = reqDriver.data();

        //Travel Push
        let travelPush = {
          ...data,
          id : v.id,
          destiny : {
            id : reqDestiny.id,
            name : dataDestiny.name
          },
          bus : {
            id : reqBus.id,
            name : dataBus.name,
            active : dataBus.active
          },
          driver : {
            id : reqDriver.id,
            name : dataDriver.name
          }
        }

        setTravelData([...travelData , travelPush]);
      }catch(e){
        console.log(e);
      }
    });

    setLoadingTravel(false);
  }

  useEffect(() => {
    const travelEvent = firestore().collection("travel").onSnapshot(requestTravel,console.log);
    return () => travelEvent();
  },[])

  return <TravelContext.Provider value={{
    travelData,
    loadingTravel
  }}>
    { children }
  </TravelContext.Provider>
}

export {
  TravelContext,
  TravelProvider
}