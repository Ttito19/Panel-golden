import React, { useState } from "react";
import { firestore } from 'firebase';
import { FaTrashAlt , FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import LoaderSpinner from '../../UIComponents/LoaderSpinner/';
import { Link } from 'react-router-dom';

// Modal para actualizar empresa
import ModalEmpresa from './ModalEmpresa';

const ListEmpresa = () => {

  var fs = firestore();
  const [ dataCompany ] = useState([]);
  const [ dataEmpresaEdit , setDataEmpresaEdit ] = useState();
  const [ isLoadingInformation , setLoadingInformation ] = useState(false);
  const [ show , setShow ] = useState(false);

  //#region - Cargar datos de la empresa  
  (()=>{
    fs.collection('company').onSnapshot((data)=>{
      dataCompany.splice(0,);
      data.forEach( doc => { dataCompany.push( { id : doc.id , data : doc.data() } ) });
      setLoadingInformation(true);
    })
  })();

  //#region Eliminar Empresa 
  const deleteCompany = async (e) => {
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

      if (accept.value) {
        await fs.collection('company').doc(e).delete()
        setLoadingInformation(false);
        Swal.fire('Deleted!','Your file has been deleted.','success');
      } 

    }catch (e) { console.log(e.message) }

  }
  //#endregion

  //#region - Abrir y cerrar Modals para editar 

  const showModalEdit = (e) => { 
    setDataEmpresaEdit(e);
    setShow(true); 
  }
  const closeModalEdit = () => setShow(false);
  
  //#endregion

  return (
    <div className="ListEmpresa container">
      <ModalEmpresa show={show} hide={closeModalEdit} dataEmpresa={dataEmpresaEdit} />
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
        <tbody>
          { 
            isLoadingInformation ? 
            dataCompany.map( e => { 
              return (
                <tr key={e.id}> 
                  <td> {e.data.direccion} </td> 
                  <td> {e.data.distrito} </td> 
                  <td> {e.data.name} </td> 
                  <td> {e.data.razon} </td> 
                  <td> {e.data.ruc} </td> 
                  <td> <Link to={`/EmpresaTravels/${e.id}`} > Ver </Link> </td>
                  <td> <Link to={`/EmpresaWorkers/${e.id}`} > Ver </Link> </td>
                  <td > <button onClick={()=>{deleteCompany(e.id)}} className="btn btn-danger"> <FaTrashAlt /> </button> </td>
                  <td> <button onClick={()=>{showModalEdit(e)}} className="btn btn-primary"> <FaRegEdit /> </button> </td>
                </tr>
              )
            })
            : 
            <tr>
              <td colSpan="7"><LoaderSpinner /></td>
            </tr>
          }
        </tbody>
        
      </table>
    </div>
  );
};

export default ListEmpresa;

