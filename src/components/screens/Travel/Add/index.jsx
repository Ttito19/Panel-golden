import React, { memo } from "react";
import useAddTravel from "../../../../hooks/useAddTravel";
import useGetTravelDataToSelect from "../../../../hooks/useGetTravelDataToSelect";
import Select from "react-select";

const TravelAdd = () => {
  const { busStopData , clientsData , destinyData , busData } = useGetTravelDataToSelect();
  const { onSubmit , onChangeBus , onChangeDestiny , onChangeBusStop } = useAddTravel();

  return <div className="container">
    <form onSubmit={onSubmit} >
      <div className="row">
        <div className="col">
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
          <Select options={clientsData} />
        </div>
      </div>
    </form>
  </div>
}

export default memo(TravelAdd);