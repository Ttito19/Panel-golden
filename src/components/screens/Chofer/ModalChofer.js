import React, { useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../UIComponents/Input";
import { firestore  } from "firebase";
import Swal from "sweetalert2";

const ModalChofer = (props) => {
  
  const fs = firestore();
  
  const name = useRef();
  const lastName = useRef();
  const direction = useRef();
  const empresa = useRef();
  const docImage = useRef();
  const fech_nac = useRef();

  useEffect( ()=>{
    if ( props.show ) {
      var d = props.dataChofer.data;  
      name.current.value = d.nombre;
      lastName.current.value = d.apellido;
      direction.current.value = d.direccion;
      empresa.current.value = d.empresa;
      fech_nac.current.value = d.fech_nac;
    }
  })

  //#region - Actualizar los datos de chofer. 
  const updateClick = () => {
    fs.collection('driver').doc(props.dataChofer.id).update({
      nombre : name.current.value,
      apellido : lastName.current.value,
      direccion : direction.current.value,
      empresa : empresa.current.value,
      fech_nac : fech_nac.current.value
    })
    .then(_=>{
      Swal.fire( 'Cambios realizados','Your file has been changed.','success' )
    })
    
  };
  //#endregion

  return (
    <Modal show={props.show} onHide={props.handleClose}> 
      <Modal.Header>
        <Modal.Title> Actualizar Chofer </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Input
            name="Nombre"
            type="text"
            refs={name}
          />
          <Input
            name="Apellido"
            type="text"
            refs={lastName}
          />
          <Input
            name="Direccion"
            type="text"
            refs={direction}
          />
          <Input
            name="Empresa"
            type="text"
            refs={empresa}
          />
          <Input 
            name="Documento Imagen"
            type="file"
            refs={docImage}
          />
          <Input
            name="Fecha de nacimiento"
            type="date"
            refs={fech_nac}
          />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}> Cerrar </Button>
        <Button variant="primary" onClick={updateClick}> Guardar cambios </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalChofer;
