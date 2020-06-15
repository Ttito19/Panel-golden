import React, { useState } from "react";
import { useFirebaseApp } from "reactfire";
import Input from "../../subcomponets/Input";
import Swal from "sweetalert2";
function AddLocation() {
  //firebase
  const { firestore } = useFirebaseApp();
  //states
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const ButtonAddLocation = (e) => {
    e.preventDefault();
    if (
      latitude != "" &&
      longitude != "" &&
      description != "" &&
      image != "" &&
      region != ""
    ) {
      const fb = firestore();
      fb.collection("location")
        .add({
          coords: new firestore.GeoPoint(
            parseFloat(latitude),
            parseFloat(longitude)
          ),
          description,
          image,
          name,
          region,
        })
        .then(
          () => setLatitude(0),
          setLongitude(0),
          setDescription(""),
          setImage(""),
          setName(""),
          setRegion(""),
          Swal.fire("Éxito", "Se agrego correctamente", "success")
        );
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "Campos Vacíos",
      });
    }
  };
  return (
    <div className="container">
      <form className="form-group">
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

        <Input
          value={description}
          name="Descripción"
          type="text"
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
        <Input
          value={image}
          name="Url Imagen"
          type="text"
          onChange={(e) => setImage(e.currentTarget.value)}
        />

        <Input
          value={name}
          name="Nombre de Ubicación"
          type="text"
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <Input
          value={region}
          name="Región"
          type="text"
          onChange={(e) => setRegion(e.currentTarget.value)}
        />
        <div className="btn pb-2">
          <button className="btn btn-primary" onClick={ButtonAddLocation}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLocation;
