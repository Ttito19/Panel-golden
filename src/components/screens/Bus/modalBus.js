import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../subcomponets/Input";
import { useFirebaseApp } from "reactfire";
import Swal from "sweetalert2";
export const ModalBus = (props) => {
  const [closeModal, setCloseModal] = useState(false);
  const { firestore } = useFirebaseApp();
  //refs
  const refName = useRef();
  const refSeatDesign = useRef();
  const refType = useRef();
  const updateBus = () => {
    const name = refName.current.value;
    const seatDesign = refSeatDesign.current.value;
    const type = refType.current.value;

    if (name && seatDesign && type) {
      const refDB = firestore().collection("bus").doc(props.id.id);
      refDB
        .update({
          name,
          seatDesign,
          type,
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
            defaultValue={props.id == null ? "" : props.id.seatDesign}
            name="Diseño de asiento"
            type="text"
            refs={refSeatDesign}
          />

          <Input
            defaultValue={props.id == null ? "" : props.id.type}
            name="Tipo"
            type="text"
            refs={refType}
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
