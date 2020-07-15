import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../subcomponets/Input";
import { firestore } from "firebase";
import Swal from "sweetalert2";

export const ModalBusStop = (props) => {
  //States
  const [closeModal, setCloseModal] = useState(false);
  //Refs
  const refName = useRef();
  const refLatitud = useRef();
  const refLongitud = useRef();

  const updateBus = () => {
    const name = refName.current.value;
    const latitud = refLatitud.current.value;
    const longitud = refLongitud.current.value;

    // console.log(name,latitud,longitud);

    if (name && latitud && longitud) {
      const refDB = firestore().collection("busStop").doc(props.id.id);
      refDB
        .update({
          name,
          coords: new firestore.GeoPoint(
            parseFloat(latitud),
            parseFloat(longitud)
          ),
        })
        .then(
          Swal.fire(
            "Éxito",
            "Los datos se actualizaron correctamente",
            "success"
          ),
          setCloseModal(props.handleClose)
        );
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "Campos Vacios",
      });
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Bus</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form-group">
          <Input
            defaultValue={props.id == null ? "" : props.id.name}
            name="Nombre"
            type="text"
            refs={refName}
          />

          <Input
            defaultValue={props.id == null ? "" : props.id.coords.latitude}
            name="Latitud"
            type="text"
            refs={refLatitud}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.coords.longitude}
            name="Longitud"
            type="text"
            refs={refLongitud}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={updateBus}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
