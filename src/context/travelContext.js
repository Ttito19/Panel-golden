import { firestore } from "firebase";
import React, { createContext, useEffect, useState } from "react";

const TravelContext = createContext();
const TravelProvider = ({ children }) => {
  const [ loadingTravel , setLoadingTravel ] = useState(true);
  const [ travelData , setTravelData ] = useState([]);

  const requestTravel = data => {
    data.docs.forEach(async v => {
      try{
        const data = v.data();
        const { busId , destiny , driverId } = data;

        //Variables
        let travelDestiny = {},
          travelBus = {},
          travelDriver = {};

        //Location
        const refLocation = firestore().collection("location");
        const reqDestiny = await refLocation.doc(destiny).get();
        const dataDestiny = reqDestiny.data();

        if(dataDestiny && Object.keys(reqDestiny).length){
          travelDestiny = {
            id : reqDestiny.id,
            name : dataDestiny.name
          }
        }

        //Bus
        const refBus = firestore().collection("bus");
        const reqBus = await refBus.doc(busId).get();
        const dataBus = reqBus.data();

        if(dataBus && Object.keys(reqBus).length){
          travelBus = {
            id : reqBus.id,
            name : dataBus.name,
            active : dataBus.active,
            seatDesign : dataBus.seatDesign
          }
        }

        //Chofer
        const refDriver = firestore().collection("driver");
        const reqDriver = await refDriver.doc(driverId).get();
        const dataDriver = reqDriver.data();

        if(dataDriver && Object.keys(reqDriver).length){
          travelDriver = {
            id : reqDriver.id,
            name : dataDriver.name
          }
        }

        //Travel Push
        let travelPush = {
          ...data,
          id : v.id,
          destiny : { ...travelDestiny },
          bus : { ...travelBus },
          driver : { ...travelDriver }
        }

        setTravelData([...travelData , travelPush]);
        setLoadingTravel(false);
      }catch(e){
        console.log(e);
      }
    });
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