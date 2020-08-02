import React, { useContext } from "react";
import { TravelContext } from "../../../../context/travelContext";
import TravelListMap from "./TravelListMap";
import useListTravel from "../../../../hooks/useListTravel";
import LoaderSpinner from "../../../UIComponents/LoaderSpinner";
import CustomModal from "../../../UIComponents/CustomModal";

const TravelList = () => {
  const { loadingTravel } = useContext(TravelContext);
  const { isShowClients , toggleShowClients } = useListTravel();

  return <div>
    <div className="responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Fecha de Salida</th>
            <th>Fecha de Llegada</th>
            <th>Chofer</th>
            <th>Bus</th>
            <th>Activo</th>
            <th>Destino</th>
            <th>Clientes</th>
            <th>Diseño del Asiento</th>
            <th>Paraderos</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          { 
            loadingTravel ? 
              <td colSpan="10"><LoaderSpinner /></td> : 
              <TravelListMap activeModalClient={toggleShowClients} /> 
          }
        </tbody>
      </table>
    </div>
    <CustomModal show={isShowClients} hide={toggleShowClients} >
    </CustomModal>
  </div>
}

export default TravelList;