import React, { useState, useEffect } from "react";
import { useFirebaseApp } from "reactfire";
import Input from "../../subcomponets/Input";
import Swal from "sweetalert2";
function AddChofer() {
  const [name, setName] = useState("");
  const [type, setype] = useState("");
  const [qty, setQty] = useState("");
  const [description, setDescription] = useState("");
  const firebase = useFirebaseApp();
  const ButtonAddChofer = (e) => {
    e.preventDefault();

    if (name != "" && type != "" && qty != "" && description != "") {
      firebase
        .firestore()
        .collection("items")
        .add({
          name,
          type,
          qty,
          description,
        })
        .then(() => setName(""), setype(""), setQty(""), setDescription(""))
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Lo sentimos",
            text: "No se pudo registrar los datos",
          });
        });
      Swal.fire("Éxito", "Se agrego correctamente", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "No se pudo registrar los datos",
      });
    }
  };

  return (
    <div className="container-fluid ">
      <form className="form-group">
        <div className="col-6">
          <Input
            value={description}
            name="description"
            type="text"
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <Input
            value={name}
            name="name"
            type="text"
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <Input
            value={qty}
            name="qty"
            type="text"
            onChange={(e) => setQty(e.currentTarget.value)}
          />
          <Input
            value={type}
            name="type"
            type="text"
            onChange={(e) => setype(e.currentTarget.value)}
          />
        </div>

        <div className="btn pb-2">
          <button className="btn btn-primary" onClick={ButtonAddChofer}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddChofer;
