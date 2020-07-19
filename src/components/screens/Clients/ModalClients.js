import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../UIComponents/Input";
import { firestore } from "firebase";
import Swal from "sweetalert2";

export const ModalClients = (props) => {
  const [closeModal, setCloseModal] = useState(false);
  const refCity = useRef();
  const refDni = useRef();
  const refDocumentImage = useRef();
  const refEmail = useRef();
  const refFullName = useRef();
  const refPassword = useRef();
  const refPhone = useRef();
  const refProfileImage = useRef();

  const updateClient = () => {
    const city = refCity.current.value;
    const dni = refDni.current.value;
    const fullName = refFullName.current.value;
    const email = refEmail.current.value;
    const password = refPassword.current.value;
    const phone = refPhone.current.value;

    if (city && dni && fullName && email && password && phone) {
      const refDB = firestore().collection("clients").doc(props.id.id);
      refDB
        .update({
          city,
          dni,
          email,
          fullName,
          password,
          phone,
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
        <Modal.Title>Actualizar Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form-group">
          <Input
            defaultValue={props.id == null ? "" : props.id.city}
            name="Ciudad"
            type="text"
            refs={refCity}
          />

          <Input
            defaultValue={props.id == null ? "" : props.id.dni}
            name="Dni"
            type="number"
            refs={refDni}
            maxLength="7"
          />

          <Input
            defaultValue={props.id == null ? "" : props.id.email}
            name="Email"
            type="text"
            refs={refEmail}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.fullName}
            name="Nombre completo"
            type="text"
            refs={refFullName}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.password}
            name="Contraseña"
            type="text"
            refs={refPassword}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.phone}
            name="Celular"
            type="number"
            refs={refPhone}
            maxLength="79"
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={updateClient}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
