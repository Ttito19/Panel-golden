import React, { useState, useEffect } from "react";
import { useFirebaseApp } from "reactfire";
import Input from "../../subcomponets/Input";
function AddBus() {
  const firebase = useFirebaseApp();
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const ButtonAddBus = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("BusStop")
      .add({
        name,
        coords: new firebase.firestore.GeoPoint(
          parseFloat(latitude),
          parseFloat(longitude)
        ),
      })
      .then(() => setName(""), setLatitude(0), setLongitude(0));
  };

  return (
    <div className="container">
      <form className="form-group">
        <Input
          value={name}
          name="Nombre"
          type="text"
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <Input
          value={latitude}
          name="Latitud"
          type="number"
          onChange={(e) => setLatitude(e.currentTarget.value)}
        />

        <Input
          value={longitude}
          name="Longitud"
          type="number"
          onChange={(e) => setLongitude(e.currentTarget.value)}
        />
        <div className="btn pb-2">
          <button className="btn btn-primary" onClick={ButtonAddBus}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBus;
