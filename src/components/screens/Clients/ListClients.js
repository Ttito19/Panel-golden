import React, { useState, useContext } from "react";
import ReactLoading from "react-loading";
import { ModalClients } from "./ModalClients";
import { list } from "../../../loader/typesLoading";
import { ClientContext } from "../../../context/clientsContext";
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

        {listClients.clients == ""
          ? list.map((l) => (
              <tbody key={l.prop}>
                <tr className="justify-content-center">
                  <td colSpan="6" className="mx-auto">
                    <ReactLoading type={l.prop} color="#000" />
                  </td>
                </tr>
              </tbody>
            ))
          : listClients.clients.map((cli) => (
              <tbody key={cli.id}>
                <tr>
                  <td>{cli.city}</td>
                  <td>{cli.code}</td>
                  <td>{cli.dni}</td>
                  <td>
                    <img src={cli.documentImage.url} width="50" height="50" />
                  </td>
                  <td>{cli.email}</td>
                  <td>{cli.fullName}</td>
                  <td>{cli.phone}</td>
                  <td>
                    <img src={cli.profileImage.url} width="50" height="50" />
                  </td>

                  <td>
                    <button
                      className="btn btn-success nt-1"
                      onClick={() => modalClients(cli.id)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger nt-1"
                      onClick={() => deleteClienteFromId(cli.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
      </table>
    </div>
  );
};
export default ListClients;
