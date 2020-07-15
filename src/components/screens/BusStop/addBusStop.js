import React, { useRef } from "react";
import { firestore } from "firebase";
import Input from "../../subcomponets/Input";
import Swal from "sweetalert2";
function AddBusStop() {
  //refs
  const refName = useRef();
  const refLatitude = useRef();
  const refLongitude = useRef();
  //add firebase
  const ButtonAddBus = (e) => {
    e.preventDefault();

    const name = refName.current.value;
    const latitude = refLatitude.current.value;
    const longitude = refLongitude.current.value;

    if ((name, latitude, longitude)) {
      const fb = firestore();
      fb.collection("busStop")
        .add({
          name,
          coords: new firestore.GeoPoint(
            parseFloat(latitude),
            parseFloat(longitude)
          ),
        })
        .then(() =>
          //alert
          Swal.fire("Éxito", "Se agrego correctamente", "success")
        )
        .catch(function (error) {
          // Handle Errors here.
          console.log(error);

          // ...
        });
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
        <div className="col-6">
          <Input name="Nombre" type="text" refs={refName} />

          <Input name="Latitud" type="text" refs={refLatitude} />

          <Input name="Longitud" type="text" refs={refLongitude} />
        </div>

        <div className="btn pb-2">
          <button className="btn btn-primary" onClick={ButtonAddBus}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBusStop;
