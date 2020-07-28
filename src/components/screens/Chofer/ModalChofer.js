import React, { useEffect, useRef , useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "../../UIComponents/Input";
import { firestore , storage } from "firebase";
import Swal from "sweetalert2";

const ModalChofer = (props) => {
  
  const stg = storage();
  const fs = firestore();
  
  const name = useRef();
  const lastName = useRef();
  const direction = useRef();
  const empresa = useRef();
  const docImage = useRef();
  const fech_nac = useRef();

  const [isCorrectImage,setCorrectImage] = useState(false);
  const [urlImage,setUrlImage] = useState("");

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

  const evaluarSubidaDeImagen = (e) => {
    var file = e.target.files[0];
    if ( !file || file.type != "image/jpeg" ){
      docImage.current.value = null;
      setUrlImage("");
    }else {
      setUrlImage(file);
      console.log(file.name);
    }
  }

  //#region - Actualizar los datos de chofer. 
  const updateClick = () => {

    if (urlImage!="") {
      var refImage = stg.ref(`/images/documentoImagenChofer/${urlImage.name}`)
      refImage.put(urlImage)
      .then( (path) => {
        console.log(props.dataChofer.id);
        fs.collection('driver').doc(props.dataChofer.id).update({
          nombre : name.current.value,
          apellido : lastName.current.value,
          direccion : direction.current.value,
          empresa : empresa.current.value,
          documentoImagen : path.ref.fullPath,
          fech_nac : fech_nac.current.value
        })
        .then(_=>{
          Swal.fire( 'Cambios realizados','Your file has been changed.','success' )
        }) 

      })
      .catch( (e) => console.log(e.message) )
    } else console.log("No se pudieron subir los cambios");


    
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
            onChange = {evaluarSubidaDeImagen}
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
