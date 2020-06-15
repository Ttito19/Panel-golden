import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import Input from "../../subcomponets/Input";
import Swal from "sweetalert2";
function AddBus() {
  //firebase
  const { firestore } = useFirebaseApp();
  //states
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  //add firebase
  const ButtonAddBus = (e) => {
    e.preventDefault();
    if (name != "", latitude != "", longitude != "") {
      const fb = firestore();
      fb.collection("busStop")
        .add({
          name,
          coords: new firestore.GeoPoint(
            parseFloat(latitude),
            parseFloat(longitude)
          ),
        })
        .then(
          // console.error(new Error("I failed you")),
          () => setName(""),
          setLatitude(0),
          setLongitude(0),
          //alert
          Swal.fire("Éxito", "Se agrego correctamente", "success")
        );
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "No se pudo registrar los datos",
      });
    }
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
          type="text"
          onChange={(e) => setLatitude(e.currentTarget.value)}
        />

        <Input
          value={longitude}
          name="Longitud"
          type="text"
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
