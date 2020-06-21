import React, { useRef } from "react";
import { useFirebaseApp } from "reactfire";
import Input from "../../subcomponets/Input";
import Swal from "sweetalert2";
function AddBus() {
  //firebase
  const { firestore } = useFirebaseApp();
  //refs
  const refName = useRef();
  const refSeatDesign = useRef();
  const refType = useRef();

  const addBus = (e) => {
    e.preventDefault();

    const name = refName.current.value;
    const seatDesign = refSeatDesign.current.value;
    const type = refType.current.value;
    if (name && seatDesign && type) {
      const fb = firestore();
      fb.collection("bus")
        .add({
          name,
          seatDesign,
          type,
        })
        .then(() => {
          Swal.fire("Éxito", "Se agrego correctamente", "success");
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "Campos vacíos",
        timer: 1000,
      });
    }
  };
  return (
    <div className="container">
      <form className="form-group">
        <div className="col-6">
          <Input name="Nombre del Bus" type="text" refs={refName} />
          <Input name="Diseño de asiento" type="text" refs={refSeatDesign} />
          <Input name="Tipo" type="text" refs={refType} />
        </div>
        <div className="btn pb-2">
          <button className="btn btn-primary" onClick={addBus}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBus;
