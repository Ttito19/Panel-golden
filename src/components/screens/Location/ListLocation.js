import React, { useState, useContext } from "react";
import { ModalLocation } from "./ModalLocation";
import { LocationContext } from "../../../context/locationContext";
import LoaderSpinner from "../../UIComponents/LoaderSpinner";

function ListLocation() {
  const [location, setlocation] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [id, setId] = useState(null);
  const listLocation = useContext(LocationContext);
  const modalLocation = (id) => {
    setShow(true);
    const newLoc = listLocation.location.filter((i) => i.id === id);
    setId(newLoc[0]);
  };

  const deleteLocationFomId = (id) => {
    listLocation.deleteLocation(id);
  };

  return (
    <div className="container pb-2">
      <ModalLocation show={show} handleClose={handleClose} id={id} />
      <table className="table table-bordered">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Latitud</th>
            <th>Longitud</th>
            <th>Imagen</th>
            <th>Descripción</th>
            <th>Nombre </th>
            <th>Región</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            !listLocation.location.length ? 
              <LoaderSpinner /> : 
              listLocation.location.map((v,i) => (
                <tr key={i}>
                  <td>{v.coords.latitude}</td>
                  <td>{v.coords.longitude}</td>
                  <td>
                    <img src={v.image.url} width="50" height="50" />
                  </td>
                  <td>{v.description}</td>
                  <td>{v.name}</td>
                  <td>{v.region}</td>
                  <td>
                    <button className="btn btn-success nt-1" onClick={() => modalLocation(v.id)} >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger nt-1"  onClick={() => deleteLocationFomId(v.id)}>
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

export default ListLocation;
