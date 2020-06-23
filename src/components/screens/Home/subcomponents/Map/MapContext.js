import React, { createContext, useEffect, useState } from "react";

const MapContext = createContext();

const MapProvider = (props) => {
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
export { MapContext, MapProvider };
