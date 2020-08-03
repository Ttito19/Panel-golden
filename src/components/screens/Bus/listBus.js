import React, { useState, useContext } from "react";
import { ModalBus } from "./modalBus";
import { Link } from "react-router-dom";

import LoaderSpinner from "../../UIComponents/LoaderSpinner";
import useRemoveThis from "../../../hooks/useRemoveThis";

//Parent Context
import { BusContext } from "../../../context/busContext";
import { SeatDesignContext } from "../../../context/seatDesignContext";

export const ListBus = () => {
  //States
  const [ displayStatus , setDisplayStatus ] = useState(false);
  const [ id , setId ] = useState(-1);

  //Custom Hooks
  const removeThis = useRemoveThis();

  //Context
  const { dataFromDocument , loadingData } = useContext(SeatDesignContext);
  const { bus , deleteBus , updateActive } = useContext(BusContext);

  if(loadingData) return <LoaderSpinner />;

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
            <th>
              <Link to="/design/list">Diseño de asiento</Link>
            </th>
            <th>Tipo</th>
            <th>¿Viaje?</th>
            <th>Editar</th>
            <th>Elimnar</th>
          </tr>
        </thead>
        <tbody>
        { 
          !bus ? 
            <LoaderSpinner /> : 
            bus.map((v,i) => {
              let isActive = v.active ? "Si" : "No";

              return <tr key={i}>
                <td>{v.name}</td>
                <td>{DesignNameFilter(v.seatDesign)}</td>
                <td>{v.type}</td>
                <td>
                  <button onClick={() => updateActive(v.id,isActive)} className="btn btn-primary btn-sm">{isActive}</button> 
                </td>
                <td>
                  <button className="btn btn-success nt-1" onClick={() => modalBus(v.id)}>
                    Editar
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger nt-1" onClick={() => DeleteBusById(v.id)} >
                    Eliminar
                  </button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListBus;
