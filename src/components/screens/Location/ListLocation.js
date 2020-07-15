import React, { useState, useContext } from "react";
import ReactLoading from "react-loading";
import { ModalLocation } from "./ModalLocation";
import { list } from "../../../loader/typesLoading";
import { LocationContext } from "../../../context/locationContext";

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
        {listLocation.location == ""
          ? list.map((l) => (
              <tbody key={l.prop}>
                <tr className="justify-content-center">
                  <td colSpan="6" className="mx-auto">
                    <ReactLoading type={l.prop} color="#000" />
                  </td>
                </tr>
              </tbody>
            ))
          : listLocation.location.map((loc) => (
              <tbody key={loc.id}>
                <tr>
                  {/* <td>{loc.id}</td> */}
                  <td>{loc.coords.latitude}</td>
                  <td>{loc.coords.longitude}</td>
                  <td>
                    <img src={loc.image.url} width="50" height="50" />
                  </td>
                  <td>{loc.description}</td>
                  <td>{loc.name}</td>
                  <td>{loc.region}</td>
                  <td>
                    <button
                      className="btn btn-success nt-1"
                      onClick={() => modalLocation(loc.id)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger nt-1"
                      onClick={() => deleteLocationFomId(loc.id)}
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

export default ListLocation;
