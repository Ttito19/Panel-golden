import React, { useState, useContext } from "react";
import ReactLoading from "react-loading";
import { ModalBusStop } from "./ModalBusStop";
import { list } from "../../../loader/typesLoading";
import { BusStopContext } from "../../../context/busStopContext";

export const ListBusStop = () => {
  //states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [id, setId] = useState(null);
  //context
  const listBusStop = useContext(BusStopContext);  
  // open modal
  const modalBusStop = (id) => {
    setShow(true);
    const newBusStop = listBusStop.busStop.filter((i) => i.id === id);

    if (newBusStop.length === 1) setId(newBusStop[0]);
  };

  const deleteBusStopFromId = (id) => {
    listBusStop.deleteBusStop(id);
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
        {listBusStop.busStop == ""
          ? list.map((l) => (
              <tbody key={l.prop}>
                <tr className="justify-content-center">
                  <td colSpan="6" className="mx-auto">
                    <ReactLoading type={l.prop} color="#000" />
                  </td>
                </tr>
              </tbody>
            ))
          : listBusStop.busStop.map((bus) => (
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
                      onClick={() => deleteBusStopFromId(bus.id)}
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
export default ListBusStop;
