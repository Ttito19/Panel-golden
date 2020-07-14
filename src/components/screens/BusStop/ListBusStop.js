import React, { useState, useEffect } from "react";
import { firestore  } from "firebase";
import ReactLoading from "react-loading";
import { ModalBusStop } from "./ModalBusStop";
import { list } from "../../../loader/typesLoading";

function ListBusStop() {
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

  const modalBusStop = (id) => {
    setShow(true);
    const newBusStop = bus.filter((i) => i.id === id);

    if (newBusStop.length === 1) setId(newBusStop[0]);

    console.log(newBusStop);
  };

  const deleteBusStop = (id) => {
    firestore().collection("busStop").doc(id).delete();
  };
  return (
    <div className="container pb-2">
      <ModalBusStop show={show} handleClose={handleClose} id={id} />
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
                      onClick={() => modalBusStop(bus.id)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger nt-1"
                      onClick={() => deleteBusStop(bus.id)}
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
export default ListBusStop;
