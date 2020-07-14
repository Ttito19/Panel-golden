import React, { useState, useEffect } from "react";
import { firestore } from "firebase";
import ReactLoading from "react-loading";
import { ModalClients } from "./ModalClients";
import { list } from "../../../loader/typesLoading";

function ListClients() {
  const [clients, setClients] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("clients")
      .onSnapshot((snapshot) => {
        const listClients = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClients(listClients);
      });
    return () => unsubscribe();
  }, []);

  const modalClients = (id) => {
    setShow(true);
    const newClients = clients.filter((i) => i.id === id);

    if (newClients.length === 1) setId(newClients[0]);

    console.log(newClients);
  };

  const deleteCliente = (id) => {
    firestore().collection("clients").doc(id).delete();
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
            {/* <th>Contraseña</th> */}
            <th>Celular</th>
            <th>Foto del cliente</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        {clients == ""
          ? list.map((l) => (
              <tbody key={l.prop}>
                <tr className="justify-content-center">
                  <td colSpan="6" className="mx-auto">
                    <ReactLoading type={l.prop} color="#000" />
                  </td>
                </tr>
              </tbody>
            ))
          : clients.map((cli) => (
              <tbody key={cli.id}>
                <tr>
                  <td>{cli.city}</td>
                  <td>{cli.code}</td>
                  <td>{cli.dni}</td>
                  <td>
                    <img src={cli.documentImage} width="50" height="50" />
                  </td>
                  <td>{cli.email}</td>
                  <td>{cli.fullName}</td>
                  {/* <td>{cli.password}</td> */}
                  <td>{cli.phone}</td>
                  <td>
                    <img src={cli.profileImage} width="50" height="50" />
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
                      onClick={() => deleteCliente(cli.id)}
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
}
export default ListClients;
