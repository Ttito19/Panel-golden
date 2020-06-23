import React, { useEffect, useState, useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import moment from "moment";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { MapContext } from "./MapContext";
const mapStyles = {
  width: "70%",
  height: "70%",
};

function MapContainer(props) {
  const context = useContext(MapContext);
  return (
    <div>
      <Map
        google={props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={{ lat: -9.1086238, lng: -84.0687229 }}
      >
        <Marker
          position={{
            lat: context.coordenadas.latitud,
            lng: context.coordenadas.longitud,
          }}
        />
      </Map>
      ;
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBoe-H1x3EE3JrRujHfsHnbpUFS_SQHrVg",
})(MapContainer);
