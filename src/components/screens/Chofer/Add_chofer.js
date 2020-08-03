import React, { useState, useEffect } from "react";
import { firestore , storage } from "firebase";
// UIComponents
import Input from "../../UIComponents/Input";
import Select from '../../UIComponents/Select'
import Swal from "sweetalert2";

function AddChofer() {

  const fs = firestore();
  const stg = storage();

  const [ name,setName ] = useState("");
  const [ lastName,setLastName ] = useState("");
  const [ direction,setDirection ] = useState("");
  const [ dateOfBirth , setDateOfBirth ] = useState("");
  const [ business , setBusiness ] = useState("");
  const [ documentImage , setDocumentImage ] = useState("");
  const [ isLoadingSelectValues, setLoadingSelectValues ] = useState(false);
  const [ selectEmpresa ] = useState([]);

  const setName_ = (e) => setName(e.target.value)
  const setLastName_ = (e) => setLastName(e.target.value)
  const setDirection_ = (e) => setDirection(e.target.value)
  const setDateOfBirth_ = (e) => setDateOfBirth(e.target.value)
  const setBusiness_ = (e) => setBusiness(e.target.value)


  const formatDateNow = () => {
    var d = new Date();
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;
  }

  useEffect( ()=>{

    //#region - Cargar datos de la compañia para el select 
    if ( !isLoadingSelectValues )

      fs.collection('company').get()
      .then( data => {
        data.forEach( doc => {
          var nameEmpresa = doc.data().name;
          selectEmpresa.push( { value : nameEmpresa , name : nameEmpresa } )
        })
        setLoadingSelectValues(true);
      })
    //#endregion

  })
  

 

  const addChofer = async (e) => {
    e.preventDefault();
    if ( name != "" && lastName!= "" && direction != "" && dateOfBirth != "" && documentImage != "" && business !="") {
      try {
        var storageRef = stg.ref(`/images/documentoImagenChofer/${documentImage.name}`);
        await storageRef.put(documentImage);
        var url = await storageRef.getDownloadURL();

        await fs.collection('driver').add({
          name ,
          lastName,
          direction  ,
          creationDate : formatDateNow(),
          dateOfBirth ,
          business ,
          documentImage : url
        })
        Swal.fire("Éxito", "Se agrego correctamente", "success");

      }catch (e){ console.log(e.message) }
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "No se pudo registrar los datos",
      });
    }
  
  }
  
  const evaluateImage = (e) => { 
    var image = e.target.files[0];
    if (  !image ||  image.type != "image/jpeg" )
    {
      setDocumentImage("");
      console.log("Es tipo de formato no es permitido.");
    }else setDocumentImage(image);
  
  }
 

  return (
    <div className="container-fluid ">
        <form className="form-group">
          <div className="col-6">
            <Input
              name="Nombre"
              type="text"
              onChange={setName_}
            />
            <Input
              name="Apellido"
              type="text"
              onChange = {setLastName_}
            />
            {
              isLoadingSelectValues ?
              <Select 
                optionsValues = {selectEmpresa}
                onChange={setBusiness_}
              />
              : <select>....</select>
            }
            

            <Input 
              name = "Foto de documento"
              type = "file"
              onChange = { evaluateImage }
            />
            <Input
              name="Fecha de nacimiento"
              type="date"
              onChange={setDateOfBirth_}
            />
            <Input
              name="Direccion de vivienda"
              type="text"
              onChange={setDirection_}
            />
          </div>

          <div className="btn pb-2">
            <button className="btn btn-primary" onClick={addChofer}> Agregar </button>
          </div>
        </form>
    </div>
  );
}
export default AddChofer;
