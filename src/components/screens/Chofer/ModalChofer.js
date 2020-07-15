import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../subcomponets/Input";
import { firestore } from "firebase";
import Swal from "sweetalert2";

export const ModalChofer = (props) => {
  //cerrar Modal
  const [closeModal, setCloseModal] = useState(false);
  //Refs
  const refDescription = useRef();
  const refName = useRef();
  const refQty = useRef();
  const refType = useRef();

  const updateClick = () => {
    const description = refDescription.current.value;
    const name = refName.current.value;
    const qty = refQty.current.value;
    const type = refType.current.value;
    if (name && type && qty && description) {
      const refDB = firestore().collection("items").doc(props.id.id);
      refDB
        .update({
          name: name,
          type: type,
          qty: qty,
          description: description,
        })
        .then(
          () =>
            Swal.fire(
              "Éxito",
              "Los datos se actualizaron correctamente",
              "success"
            ),
          setCloseModal(props.handleClose)
        )
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Lo sentimos",
            text: "No se pudo actualizar los datos",
          });
        });
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
        <Modal.Title>Actualizar Chofer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form-group">
          <Input
            defaultValue={props.id == null ? "" : props.id.description}
            name="description"
            type="text"
            refs={refDescription}
          />

          <Input
            defaultValue={props.id == null ? "" : props.id.name}
            name="name"
            type="text"
            refs={refName}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.qty}
            name="qty"
            type="text"
            refs={refQty}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.type}
            name="type"
            type="text"
            refs={refType}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={updateClick}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
