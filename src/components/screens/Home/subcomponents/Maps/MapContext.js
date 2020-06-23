import React, { useState, useEffect, createContext } from "react";

export const MapContext = createContext();

export const MapProvider = (props) => {
  const [coordenadas, setCoordenadas] = useState({
    latitud: null,
    longitud: null,
  });
  let geoId;

  useEffect(() => {
    geoId = window.navigator.geolocation.watchPosition((position) => {
      setCoordenadas({
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
      });
    });
    return () => {
      navigator.geolocation.clearWatch(geoId);
    };
  }, []);
  return (
    <MapContext.Provider value={{ coordenadas }}>
      {props.children}
    </MapContext.Provider>
  );
};
