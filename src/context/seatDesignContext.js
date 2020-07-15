import React , { useState , createContext, useEffect } from "react";
import { firestore } from "firebase";

const SeatDesignContext = createContext();
const SeatDesignProvider = (props) => {
  //Props
  const { children } = props;

  //States
  const [ dataFromDocument , setDataFromDocument ] = useState([]);
  const [ loadingData , setLoadingData ] = useState(true);

  //Request
  const requestSeatDesign = data => {
    let newDocument = [];
    data.forEach(v => {
      let filterData = {
        ...v.data(),
        id : v.id
      }
      
      newDocument.push(filterData);
    })

    setDataFromDocument(newDocument);
    setLoadingData(false);
  }

  useEffect(() => {
    const event = firestore().collection("seatDesign").onSnapshot(requestSeatDesign,console.log);

    return () => event();
  },[]);

  //Actions
  const deleteSeatDesignFromId = id => {
    firestore().collection("seatDesign").doc(id).delete()
      .catch(console.log)
  }

  const searchSeatDesignFromId = id => {
    return dataFromDocument.filter(v => v.id === id)[0];
  }

  return <SeatDesignContext.Provider value={{ 
    loadingData,
    dataFromDocument,
    deleteSeatDesignFromId,
    searchSeatDesignFromId
  }}>
    { children }
  </SeatDesignContext.Provider>
}

export {
  SeatDesignContext,
  SeatDesignProvider
}