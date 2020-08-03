import React, { useEffect, useRef , useState } from "react";
import { Modal, Button } from "react-bootstrap";

// UIComponents
import Input from "../../UIComponents/Input";
import Select from '../../UIComponents/Select';

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
  const [urlImage,setUrlImage] = useState("");
  const [ selectCompany ] = useState([]);
  const [ isLoadingSelects , setLoadingSelects ] = useState(false);

  const loadingSelectCompany = async () => {
    const data = await fs.collection('company').get();
    data.forEach( e => {
      selectCompany.push({ value : e.data().name , name : e.data().name })
    })
    setLoadingSelects(true);
  }

  useEffect( ()=>{
    if ( props.show ) {
      var d = props.dataChofer.data;  
      name.current.value = d.name;
      lastName.current.value = d.lastName;
      direction.current.value = d.direction;
      empresa.current.value = d.business;
      fech_nac.current.value = d.dateOfBirth;
    }

    // Cargar select de la empresa 
    if (!isLoadingSelects) loadingSelectCompany()
    
  })

  const evaluarSubidaDeImagen = (e) => {
    var file = e.target.files[0];
    if ( !file || file.type != "image/jpeg" ){
      docImage.current.value = null;
      setUrlImage("");
    }else setUrlImage(file);
  }

  //#region - Actualizar los datos de chofer. 
  const updateClick = async () => {

    if (urlImage!="") {
      
      var refImage = stg.ref(`/images/documentoImagenChofer/${urlImage.name}`)
      try {
        var path = await refImage.put(urlImage)
        var url = await refImage.getDownloadURL()
        await fs.collection('driver').doc(props.dataChofer.id).update({
            name : name.current.value,
            lastName : lastName.current.value,
            direction : direction.current.value,
            business : empresa.current.value,
            documentImage : url,
            dateOfBirth : fech_nac.current.value
        })
        Swal.fire( 'Cambios realizados','Your file has been changed.','success' )
      } catch (e) { console.log(e.message) }
      
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
          { 
            isLoadingSelects ?
            <Select 
              optionsValues ={selectCompany}
              refs = {empresa}
            />
            : <select>....</select>
          }
         
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
