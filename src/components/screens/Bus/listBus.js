import React, { useState, useEffect } from "react";
import { firestore } from "firebase";
import ReactLoading from "react-loading";
import { ModalBus } from "./modalBus";
import { list } from "../../../loader/typesLoading";

function ListBus() {
  const [bus, setBus] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("bus")
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
    ///abrre modal
    setShow(true);
    const newBus = bus.filter((i) => i.id === id);

    if (newBus.length === 1) setId(newBus[0]);

    console.log(newBus);
  };

  const deleteBus = (id) => {
    firestore().collection("bus").doc(id).delete();
  };

  return (
    <div className="container pb-2">
      <ModalBus show={show} handleClose={handleClose} id={id} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Diseño de asiento</th>
            <th>Tipo</th>
            <th>Editar</th>
            <th>Elimnar</th>
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
                  <td>{bus.name}</td>
                  <td>{bus.seatDesign}</td>
                  <td>{bus.type}</td>
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
