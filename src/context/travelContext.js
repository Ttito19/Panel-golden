import { firestore } from "firebase";
import React, { createContext, useEffect, useState } from "react";

const TravelContext = createContext();
const TravelProvider = ({ children }) => {
  const [ loadingTravel , setLoadingTravel ] = useState(true);
  const [ travelData , setTravelData ] = useState([]);

  const refLocation = firestore().collection("location"),
    refBus = firestore().collection("bus"),
    refDriver = firestore().collection("driver");

  const _getDestiny = async destiny => {
    if(destiny){
      const reqDestiny = await refLocation.doc(destiny).get();
      if(reqDestiny.exists){
        const { name } = reqDestiny.data();
        return { 
          id : reqDestiny.id, 
          name 
        };
      }
    }

    return {};
  }

  const _getBus = async bus => {
    if(bus){
      const reqBus = await refBus.doc(bus).get();
      if(reqBus.exists){
        const { name , seatDesign } = reqBus.data();
        return { 
          id : reqBus.id,
          name,
          seatDesign 
        };
      }          
    }

    return {};
  }

  const _getDriver = async driver => {
    if(driver){
      const reqDriver = await refDriver.doc(driver).get();
      if(reqDriver.exists){
        const { name } = reqDriver.data();
        return { 
          id : reqDriver.id,
          name 
        };
      }          
    }

    return {};
  }

  const requestTravel = async data => {
    let travelsArray = [],
      fullData = [];

    data.docs.forEach( v => travelsArray.push({ id : v.id, data : v.data() }) );
  
    for(let travel of travelsArray){
      try {
        const { busId , destiny , driverId } = travel.data;

        //Variables
        let travelDestiny = await _getDestiny(destiny),
          travelBus = await _getBus(busId),
          travelDriver = await _getDriver(driverId);

        //Travel Push
        let travelPush = {
          ...travel.data,
          id : travel.id,
          destiny : { ...travelDestiny },
          bus : { ...travelBus },
          driver : { ...travelDriver }
        }

        fullData.push(travelPush);
      }catch(e){
        console.error(e);
      }
    }

    setTravelData(fullData);
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