import React, { memo } from "react";
import useAddTravel from "../../../../hooks/useAddTravel";
import useGetTravelDataToSelect from "../../../../hooks/useGetTravelDataToSelect";
import AcumulativeSelect from "./AcumulativeSelect";
import CustomSelect from "./CustomSelect";

const TravelAdd = () => {
  const { busStopData , clientsData , destinyData , busData , driverData } = useGetTravelDataToSelect();
  const { 
    lockButtonInsert,
    onSubmit,
    onChangeBus,
    onChangeDestiny,
    onAddBusStop,
    currentBusStop,
    onChangeClients,
    onChangeDepartureDate,
    onChangeArrivalDate,
    onChangeDriver
  } = useAddTravel();

  return <div className="container">
    <form onSubmit={onSubmit} >
      <div className="row">
        <div className="col">
          <div className="form-group">	
            <label htmlFor="urs">Fecha y Hora de Salida : </label>
            <input onChange={onChangeDepartureDate} type="datetime-local" className="form-control" id="urs" />
          </div>
          <div className="form-group">	
            <label htmlFor="urs">Fecha y Hora de Llegada : </label>
            <input onChange={onChangeArrivalDate} type="datetime-local" className="form-control" id="urs" />
          </div>       
          <CustomSelect title="Destino" data={destinyData} onChange={onChangeDestiny} />
          <CustomSelect title="Vehiculo" data={busData} onChange={onChangeBus} />
          <CustomSelect title='Chofer' data={driverData} onChange={onChangeDriver} />
           <div className="form-group">
            <button disabled={lockButtonInsert} className="btn btn-primary">Insertar Viaje</button>
          </div>
        </div>
        <div className="col">
          <CustomSelect title="Clientes" onChange={onChangeClients} data={clientsData} multi={true} />
          <div className="mt-5">
            <AcumulativeSelect buttonActive={lockButtonInsert} data={busStopData} onAddItem={onAddBusStop} />
            <div className="mt-4">
              <span className="font-weight-bold">Lista de Paraderos</span>
              <ul className="list-group mt-2">
                { currentBusStop.map((v,i) => <li className="list-group-item" key={i}>
                    <span>{v.label}</span>
                    <span> ({v.date} </span>
                    <span> {v.time})</span>
                  </li>)}
              </ul>            
            </div>            
          </div>
        </div>
      </div>
    </form>
  </div>
}

export default memo(TravelAdd);