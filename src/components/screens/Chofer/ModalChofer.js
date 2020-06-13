import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../subcomponets/Input";
import { useFirebaseApp } from "reactfire";
import Swal from "sweetalert2";

export const ModalChofer = (props) => {
  const firebase = useFirebaseApp();
  const [name, setName] = useState("");
  const [type, setype] = useState("");
  const [qty, setQty] = useState("");
  const [description, setDescription] = useState("");
  const [closeModal, setCloseModal] = useState(false);

  const updateClick = () => {
    if (name != "" && type != "" && qty != "" && description != "") {
      firebase
        .firestore()
        .collection("items")
        .doc(props.id.id)
        .update({
          name: name,
          type: type,
          qty: qty,
          description: description,
        })
        .then(
          () => setName(""),
          setype(""),
          setQty(""),
          setDescription(""),
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
            onChange={(e) => setDescription(e.target.value)}
          />

          <Input
            defaultValue={props.id == null ? "" : props.id.name}
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.qty}
            name="qty"
            type="text"
            onChange={(e) => setQty(e.target.value)}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.type}
            name="type"
            type="text"
            onChange={(e) => setype(e.target.value)}
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
