import React, { useState ,useEffect } from "react";
import { firestore } from "firebase";
import ModalChofer from "./ModalChofer";
import Swal from 'sweetalert2';
import LoaderSpinner from '../../UIComponents/LoaderSpinner/';
import { FaTrashAlt , FaRegEdit } from "react-icons/fa";

const ListChofer = () => {

  const fs = firestore();
  const [dataChofer] = useState([]);
  const [dataChoferEdit,setDataChoferEdit] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoadingInformation,setLoadingInformation] = useState();
 
  //#region - Abrir y cerrar modals para editar chofer. 
  const handleClose = () => setShow(false);

  const openModalEdit = (chofer) => {
    setDataChoferEdit(chofer);
    setShow(true);
  };

  //#endregion


  useEffect(()=>{

    //#region - Cargar datos del chofer 
    fs.collection('driver').onSnapshot((data)=>{
      dataChofer.splice(0,);
      data.forEach( doc => {
        dataChofer.push( {id:doc.id , data : doc.data()} )
      });
      setLoadingInformation(true);
    })
    //#endregion 

  })

  

  //#region - Eliminar Chofer seleccionado. 
  const deleteChofer = async (id) => {
    try {
      var accept = await Swal.fire({
        title: 'Eliminar registro',
        text: "Estas seguro que deseas eliminar este registro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      if ( accept.value ) { 
        await fs.collection('driver').doc(id).delete();
        setLoadingInformation(false);
        Swal.fire('Deleted!','Your file has been deleted.','success');
      }
    } catch(e) { console.log(e.message) }
      
  };
  //#endregion
  
  const showImage = (url) => {
    Swal.fire({
      imageUrl: url,
      imageHeight: 400,
      imageAlt: 'Imagen de documento'
    })
  }

  return (
    <div className="container pb-2">
      <ModalChofer show={show} handleClose={handleClose} dataChofer={dataChoferEdit}/>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th> Nombre </th>
            <th> Apellido </th>
            <th> Direccion </th>
            <th> Empresa </th>
            <th> Documento Imagen </th>
            <th> Fecha de creacion </th>
            <th> Fecha de nacimiento </th>
            <th> Actualizar </th>
            <th> Eliminar </th>
          </tr>
        </thead>

        <tbody>
          { 
            isLoadingInformation 
            ? 
            dataChofer.map( (chofer) => {
              return (
                  <tr key={chofer.id}>
                    <td>{chofer.data.name}</td>
                    <td>{chofer.data.lastName}</td>
                    <td>{chofer.data.direction}</td>
                    <td> {chofer.data.business} </td>
                    <td> 
                      <img src={chofer.data.documentImage} onClick={()=>showImage(chofer.data.documentImage)} height="60px" width="60px" /> 
                    </td>
                    <td>{chofer.data.creationDate}</td>
                    <td>{chofer.data.dateOfBirth.toString()}</td>
                    <td>
                      <button className="btn btn-primary" onClick={()=>openModalEdit(chofer)}>
                        <FaRegEdit />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={()=>deleteChofer(chofer.id)}>
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
              )})
            :
            <tr>
              <td colSpan="7"><LoaderSpinner color="black"/></td>
            </tr>
          }
        </tbody>
        
      </table>
    </div>
  );
}
export default ListChofer;
