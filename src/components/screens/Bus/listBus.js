import React, { useState, useContext } from "react";
import ReactLoading from "react-loading";
import { ModalBus } from "./modalBus";
import { list } from "../../../loader/typesLoading";
import { BusContext } from "../../../context/busContext";
import { SeatDesignContext } from "../../../context/seatDesignContext";
import useRemoveThis from "../../../hooks/useRemoveThis";

export const ListBus = () => {
  //States
  const [ displayStatus , setDisplayStatus ] = useState(false);
  const [ id , setId ] = useState(-1);

  //Custom Hooks
  const removeThis = useRemoveThis();

  //Context
  const { dataFromDocument , loadingData } = useContext(SeatDesignContext);
  const { bus , deleteBus } = useContext(BusContext);

  if(loadingData) return null;

  /* ACTIONS */
  const handleClose = () => setDisplayStatus(false);

  const modalBus = id => {
    setDisplayStatus(true);
    const newBus = bus.filter((i) => i.id === id);

    if (newBus.length === 1) setId(newBus[0]);
  };

  const DeleteBusById = async id => {
    const Security = await removeThis();
    if(Security) 
      deleteBus(id);
  };

  const DesignNameFilter = id => {
    const data = dataFromDocument.find(v => v.id === id);
    return Object.keys(data ? data : {}).length > 0 ? data.name : "---- ERROR ----";
  }

  /* JSX */
  return (
    <div className="container pb-2">
      <ModalBus show={displayStatus} handleClose={handleClose} id={id} />
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
        { !bus ? list.map((v) => (
              <tbody key={v.prop}>
                <tr className="justify-content-center">
                  <td colSpan="6" className="mx-auto">
                    <ReactLoading type={v.prop} color="#000" />
                  </td>
                </tr>
              </tbody>
            ))
          : bus.map((bus) => (
              <tbody key={bus.id}>
                <tr>
                  <td>{bus.name}</td>
                  <td>{DesignNameFilter(bus.seatDesign)}</td>
                  <td>{bus.type}</td>
                  <td>
                    <button className="btn btn-success nt-1" onClick={() => modalBus(bus.id)}>
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger nt-1" onClick={() => DeleteBusById(bus.id)} >
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

export default ListBus;
