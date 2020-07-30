import React, { useState, useContext } from "react";
import { ModalBusStop } from "./ModalBusStop";
import { list } from "../../../loader/typesLoading";
import { BusStopContext } from "../../../context/busStopContext";
import LoaderSpinner from "../../UIComponents/LoaderSpinner";

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

    if (newBusStop.length) setId(newBusStop[0]);
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
        <tbody>
          {
            !listBusStop.busStop.length ?
              <LoaderSpinner /> : 
              listBusStop.busStop.map((v,i) => (
                <tr key={i}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.coords.latitude}</td>
                  <td>{v.coords.longitude}</td>
                  <td>
                    <button className="btn btn-success nt-1" onClick={() => modalBusStop(v.id)} >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger nt-1" onClick={() => deleteBusStopFromId(v.id)} >
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
export default ListBusStop;
