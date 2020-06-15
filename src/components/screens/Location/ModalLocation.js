import React, { useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../subcomponets/Input";
import { useFirebaseApp } from "reactfire";
import Swal from "sweetalert2";
export const ModalLocation = (props) => {
  //States
  const [closeModal, setCloseModal] = useState(false);
  //firebase
  const { firestore } = useFirebaseApp();
  //refs

  const refLatitud = useRef();
  const refLongitud = useRef();
  const refDescription = useRef();
  const refImage = useRef();
  const refName = useRef();
  const refRegion = useRef();
  const updateLocation = () => {
    const latitud = refLatitud.current.value;
    const longitud = refLongitud.current.value;
    const description = refDescription.current.value;
    const image = refImage.current.value;
    const name = refName.current.value;
    const region = refRegion.current.value;
    if (latitud && longitud && description && image && name && region) {
      const refDB = firestore().collection("location").doc(props.id.id);
      refDB
        .update({
          coords: new firestore.GeoPoint(
            parseFloat(latitud),
            parseFloat(longitud)
          ),
          description,
          image,
          name,
          region,
        })
        .then(
          Swal.fire(
            "Éxito",
            "Los datos se actualizaron correctamente",
            "success"
          ),
          setCloseModal(props.handleClose));
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
          <Input
            defaultValue={props.id == null ? "" : props.id.description}
            name="Descripción"
            type="text"
            refs={refDescription}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.image}
            name="Url Imagen"
            type="text"
            refs={refImage}
          />

          <Input
            defaultValue={props.id == null ? "" : props.id.name}
            name="Nombre de Ubicación"
            type="text"
            refs={refName}
          />
          <Input
            defaultValue={props.id == null ? "" : props.id.region}
            name="Región"
            type="text"
            refs={refRegion}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={updateLocation}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
