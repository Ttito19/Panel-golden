import React, { useRef , useState ,useEffect } from "react";
import { firestore } from 'firebase';
import { FaTrashAlt , FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import LoaderSpinner from '../../UIComponents/LoaderSpinner/'

// Modal para actualizar empresa
import ModalEmpresa from './ModalEmpresa';

const ListEmpresa = () => {

  var fs = firestore();
  const [ dataCompany , setDataCompany ] = useState(new Array());
  const [ isLoadingInformation , setLoadingInformation ] = useState(false);
  const [ dataEmpresaEdit , setDataEmpresaEdit ] = useState();
  const [ showModalEdit , setShowModalEdit ] = useState(false);

  useEffect(()=>{
    fs.collection('company').get()
    .then( (data) => {
      dataCompany.splice(0,);
      data.forEach( doc => { dataCompany.push( { id : doc.id , data : doc.data() } ) });
      setLoadingInformation(true);
    })
  })

  const addListCompany = () => {
    return ( 
        <tbody>
          {
          dataCompany.map( e => { 
            return (
              <tr> 
                <td> {e.data.direccion} </td> 
                <td> {e.data.distrito} </td> 
                <td> {e.data.name} </td> 
                <td> {e.data.razon} </td> 
                <td> {e.data.ruc} </td> 
                <td> <button className="btn btn-primary" > Ver </button> </td>
                <td> <button className="btn btn-primary" > Ver </button> </td>
                <td > <button onClick={()=>{deleteCompany(e.id)}} className="btn btn-danger"> <FaTrashAlt /> </button> </td>
                <td> <button onClick={()=>{showModalEdit_(e)}} className="btn btn-primary"> <FaRegEdit /> </button> </td>
              </tr>
            )
          })
          }
        </tbody>
      )
  }
  const deleteCompany = (e) => {

    Swal.fire({
      title: 'Eliminar registro',
      text: "Estas seguro que deseas eliminar este registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        fs.collection('company').doc(e).delete()
        .catch(()=>{
          console.log("No se pudo eliminar el registro")
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   
  }

  // Editar Informacion de la empresa

  const showModalEdit_ = (e) => { 
    setDataEmpresaEdit(e);
    setShowModalEdit(true); 
  }
  const closeModalEdit = () => { setShowModalEdit(false); }
  

  return (
    <div className="ListEmpresa container">
      <table className="table">
        <caption> Empresas </caption>
        <thead>
          <tr>
              <th> Direccion </th>
              <th> Distrito </th>
              <th> Nombre </th>
              <th> Razon social </th>
              <th> Ruc </th>
              <th> Viajes </th>
              <th> Trabajadores </th>
              <th> Delete </th>
              <th> Update </th>
          </tr>
        </thead>
        { isLoadingInformation ? addListCompany() : <LoaderSpinner color="black" /> }
      </table>
      <ModalEmpresa show={showModalEdit} hide={closeModalEdit} dataEmpresa={dataEmpresaEdit} />
    </div>
  );
};

export default ListEmpresa;

