import React, { useState, useContext } from "react";
import { ModalClients } from "./ModalClients";
import { ClientContext } from "../../../context/clientsContext";
import LoaderSpinner from "../../UIComponents/LoaderSpinner";

const ListClients = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [id, setId] = useState(null);
  const listClients = useContext(ClientContext);
  const modalClients = (id) => {
    setShow(true);
    const newClients = listClients.clients.filter((i) => i.id === id);

    if (newClients.length === 1) setId(newClients[0]);
  };

  const deleteClienteFromId = (id) => {
    listClients.clients(id);
  };

  return (
    <div className="container pb-5">
      <ModalClients show={show} handleClose={handleClose} id={id} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Ciudad</th>
            <th>Código</th>
            <th>Dni</th>
            <th>Imagen Dni</th>
            <th>Email</th>
            <th>Nombre Completo</th>
            <th>Celular</th>
            <th>Foto del cliente</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {
          !listClients.clients.length ?
            <LoaderSpinner /> : 
            listClients.clients.map((v,i) => (
              <tr key={i}>
                <td>{v.city}</td>
                <td>{v.code}</td>
                <td>{v.dni}</td>
                <td>
                  <img src={v.documentImage.url} width="50" height="50" />
                </td>
                <td>{v.email}</td>
                <td>{v.fullName}</td>
                <td>{v.phone}</td>
                <td>
                  <img src={v.profileImage.url} width="50" height="50" />
                </td>
                <td>
                  <button className="btn btn-success nt-1" onClick={() => modalClients(v.id)} >
                    Editar
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger nt-1" onClick={() => deleteClienteFromId(v.id)} >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
export default ListClients;
