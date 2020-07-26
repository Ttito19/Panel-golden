import React, { useState, useEffect , useRef } from "react";
import { firestore } from "firebase";
import { storage } from 'firebase';
import Input from "../../UIComponents/Input";
import Swal from "sweetalert2";

function AddChofer() {

  const fs = firestore();
  const stg = storage();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");

  const [empresa, setEmpresa] = useState("");
  const [documentoImagen, setDocumentoImagen] = useState("");
  const [fech_nac, setFech_nac] = useState("");

  const formatDateNow = () => {
    var d = new Date(Date.now());
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`;
  }

  const addImageAndData = () => {
    if ( nombre != "" && apellido!= "" && direccion != "" && fech_nac != "" && documentoImagen != "" ) {

      var storageRef = stg.ref(`/images/documentoImagenChofer/${documentoImagen.name}`);
      storageRef.put(documentoImagen)
      .then( d => {
        addChofer(d.ref.fullPath);
      })  
      .catch( e => console.log(e.message) )

    } else {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "No se pudo registrar los datos",
      });
    }
    

  }

  const addChofer = (d) => {
      fs.collection("driver")
        .add({
          nombre,
          apellido,
          direccion,
          fech_create : formatDateNow(),
          fech_nac :fech_nac,
          empresa : "???",
          documentoImagen : d
        })
        // .then(() => {} )
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Lo sentimos",
            text: "No se pudo registrar los datos",
          });
        });
      Swal.fire("Éxito", "Se agrego correctamente", "success");
  }

  const ButtonAddChofer = (e) => {
    e.preventDefault();
    addImageAndData();
  }

  const setNombre_ = (e) => { setNombre(e.target.value) }
  const setApellido_ = (e) => { setApellido(e.target.value) }
  const setDireccion_ = (e) => { setDireccion(e.target.value) }
  const setFech_nac_ = (e) => { setFech_nac(e.target.value) }
  
  const setDocumentoImagen_ = (e) => { 
    var image = e.target.files[0];
    if ( 
      !image || 
      image.type != "image/jpeg" 
    )
    {
      setDocumentoImagen("");
      console.log("Es tipo de formato no es permitido.");
    } else { setDocumentoImagen(image); }
  }
 

  return (
    <div className="container-fluid ">
      <form className="form-group">
        <div className="col-6">
          <Input
            value={nombre}
            name="Nombre"
            type="text"
            onChange={setNombre_}
          />
          <Input
            value={apellido}
            name="Apellido"
            type="text"
            onChange={setApellido_}
          />
          <Input 
            //value = {documentoImagen} 
            name = "Foto de documento"
            type = "file"
            onChange = { setDocumentoImagen_ }
          />
          <Input
            value={fech_nac}
            name="Fecha de nacimiento"
            type="date"
            onChange={ setFech_nac_ }
          />
          <Input
            value={direccion}
            name="Direccion de vivienda"
            type="text"
            onChange={setDireccion_}
          />
        </div>

        <div className="btn pb-2">
          <button className="btn btn-primary" onClick={ButtonAddChofer}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddChofer;
