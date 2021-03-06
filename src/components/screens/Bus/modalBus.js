import React, { useState, useRef, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../UIComponents/Input";
import { firestore } from "firebase";
import Swal from "sweetalert2";
import SeatComboBox from "../../UIComponents/SeatComboBox";
import { SeatDesignContext } from "../../../context/seatDesignContext";
import useSearchByIndexBus from "../../../hooks/useSearchByIndexBus";
export const ModalBus = (props) => {
  //States
  const [ closeModal , setCloseModal ] = useState(false);
  
  //refs
  const refName = useRef();
  const refSeatDesign = useRef();
  const refType = useRef();

  //Hooks
  const searchByIndex = useSearchByIndexBus();

  //Actions
  const updateBus = async () => {
    const name = refName.current.value;
    const seatDesign = searchByIndex(refSeatDesign.current.value);
    const type = refType.current.value;

    try {
      if (name && seatDesign && type) {
        const refDB = firestore().collection("bus").doc(props.id.id);
        await refDB.update({ name , seatDesign , type });
        Swal.fire("Éxito","Los datos se actualizaron correctamente","success");
        setCloseModal(props.handleClose)
      }
    }catch(e){
      console.log(e);
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
          <SeatComboBox reference={refSeatDesign} />
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
