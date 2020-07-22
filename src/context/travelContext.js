import React, { createContext } from "react";

const TravelContext = createContext();
const TravelProvider = ({ children }) => {


  return <TravelContext.Provider>
    { children }
  </TravelContext.Provider>
}

export {
  TravelContext,
  TravelProvider
}