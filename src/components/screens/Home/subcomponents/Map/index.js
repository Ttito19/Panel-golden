import React, { useContext, useState } from "react";
import { Map, InfoWindow, Marker } from "google-maps-react";
import { MapContext } from "./MapContext";
export const App = (props) => {
  const context = useContext(MapContext);
  return (
    <div>
      {/* <h1>{context.coordenadas.latitud}</h1>
      <h1>{context.coordenadas.longitud}</h1> */}
    </div>
  );
};
