import React, { useState, useEffect } from "react";
import { useFirebaseApp } from "reactfire";
import ReactLoading from "react-loading";
import { ModalChofer } from "./ModalChofer";
import { list } from "../../../loader/typesLoading";
function ListChofer() {
  const firebase = useFirebaseApp();
  const [chofer, setChofer] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [id, setId] = useState(null);
  const modalClick = (id) => {
    setShow(true);
    chofer
      .filter((i) => i.id === id)
      .map((i) => {
        setId(i);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("items")
      .onSnapshot((snapshot) => {
        const listChofer = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChofer(listChofer);
      });

    return () => unsubscribe();
  }, []);

  const deleteChofer = (id) => {
    firebase.firestore().collection("items").doc(id).delete();
  };

  return (
    <div className="container pb-2">
      <ModalChofer show={show} handleClose={handleClose} id={id} />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>Tipo</th>
            <th>Descripcion</th>
            <th>dni</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        {chofer == ""
          ? list.map((l) => (
              <tbody key={l.prop}>
                <tr className="justify-content-center">
                  <td colSpan="6" className="mx-auto">
                    <ReactLoading type={l.prop} color="#000" />
                  </td>
                </tr>
              </tbody>
            ))
          : chofer.map((chofer) => (
              <tbody key={chofer.id}>
                <tr>
                  <td>{chofer.id}</td>
                  <td>{chofer.name}</td>
                  <td>{chofer.type}</td>
                  <td>{chofer.description}</td>
                  <td>{chofer.qty}</td>
                  <td>
                    <button
                      className="btn btn-success nt-1"
                      onClick={() => modalClick(chofer.id)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger nt-1"
                      onClick={() => deleteChofer(chofer.id)}
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
export default ListChofer;
