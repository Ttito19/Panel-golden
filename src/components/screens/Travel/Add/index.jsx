import React, { memo } from "react";
import useAddTravel from "../../../../hooks/useAddTravel";
import useGetTravelDataToSelect from "../../../../hooks/useGetTravelDataToSelect";
import CustomListBusStop from "./CustomListBusStop";
import ElementsList from "./ElementsList";

const TravelAdd = () => {
  const { busStopData , clientsData , destinyData , busData } = useGetTravelDataToSelect();
  const { onSubmit , onChangeBus , onChangeDestiny , onChangeBusStop } = useAddTravel();

  return <div className="container">
    <form onSubmit={onSubmit} >
      <div className="row">
        <div className="col">
          <ElementsList
            title="Destino"
            options={destinyData} 
            onChange={onChangeDestiny}
            isMulti={false}
          />
          <ElementsList
            title="Bus"
            options={busData} 
            onChange={onChangeBus}
            isMulti={false}
          />
          <div className="form-group">	
            <label htmlFor="urs">Fecha y Hora de Salida : </label>
            <input type="datetime-local" className="form-control" id="urs" />
          </div>
          <div className="form-group">	
            <label htmlFor="urs">Fecha y Hora de Llegada : </label>
            <input type="datetime-local" className="form-control" id="urs" />
          </div>       
          <div className="form-group">
            <button className="btn btn-primary">Insertar Viaje</button>
          </div>
        </div>
        <div className="col">
          <CustomListBusStop 
            data={busStopData} 
            title="Agregar Paraderos (En orden)"
            onChange={onChangeBusStop} 
          />
          <ElementsList 
            options={clientsData} 
            title="Agregar Pasajeros" 
          />
        </div>
      </div>
    </form>
  </div>
}

export default memo(TravelAdd);