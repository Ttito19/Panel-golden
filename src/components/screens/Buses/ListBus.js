import React, { useState, useEffect } from "react";
import { useFirebaseApp } from "reactfire";
import ReactLoading from "react-loading";
import { ModalBus } from "./ModalBus";
import { list } from "../../../loader/typesLoading";
function ListBus() {
  const { firestore } = useFirebaseApp();
  const [bus, setBus] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("busStop")
      .onSnapshot((snapshot) => {
        const listBus = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBus(listBus);
      });

    return () => unsubscribe();
  }, []);

  const modalBus = (id) => {
    setShow(true);
    const newBus = bus.filter((i) => i.id === id);

    if (newBus.length === 1) setId(newBus[0]);

    console.log(newBus);
  };

  const deleteBus = (id) => {
    firestore().collection("busStop").doc(id).delete();
  };
  return (
    <div className="container pb-2">
      <ModalBus show={show} handleClose={handleClose} id={id} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Id</td>
            <td>Nombre</td>
            <td>Latitud</td>
            <td>Longitud</td>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        {bus == ""
          ? list.map((l) => (
              <tbody key={l.prop}>
                <tr className="justify-content-center">
                  <td colSpan="6" className="mx-auto">
                    <ReactLoading type={l.prop} color="#000" />
                  </td>
                </tr>
              </tbody>
            ))
          : bus.map((bus) => (
              <tbody key={bus.id}>
                <tr>
                  <td>{bus.id}</td>
                  <td>{bus.name}</td>
                  <td>{bus.coords.latitude}</td>
                  <td>{bus.coords.longitude}</td>
                  <td>
                    <button
                      className="btn btn-success nt-1"
                      onClick={() => modalBus(bus.id)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger nt-1"
                      onClick={() => deleteBus(bus.id)}
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
export default ListBus;
