import React, { useRef } from "react";
import { firestore } from "firebase";
import Input from "../../UIComponents/Input";
import Swal from "sweetalert2";

const AddEmpresa = () => {
  //refs
  const refRazon = useRef();
  const refRuc = useRef();
  const refDir = useRef();
  const refDis = useRef();
  const refName = useRef();

  const addEmpresa = (e) => {
    e.preventDefault();

    const razon = refRazon.current.value;
    const ruc = refRuc.current.value;
    const direccion = refDir.current.value;
    const distrito = refDis.current.value;
    const name = refName.current.value;

    if (razon && ruc && direccion && distrito && name) {
      const fb = firestore();
      fb.collection("company")
        .add({
          razon,
          ruc,
          direccion,
          distrito,
          name,
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
          <Input name="Razón Social" type="text" refs={refRazon} />
          <Input name="Ruc" type="text" refs={refRuc} />
          <Input name="Dirección" type="text" refs={refDir} />
          <Input name="Distrito" type="text" refs={refDis} />
          <Input name="Nombre Corto" type="text" refs={refName} />
        </div>
        <div className="btn pb-2">
          <button className="btn btn-primary" onClick={addEmpresa}>
            Agregar Empresa
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmpresa;
