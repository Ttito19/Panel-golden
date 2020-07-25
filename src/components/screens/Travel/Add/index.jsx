import React from "react";
import ElementsList from "./ElementsList";

const TravelAdd = () => {
  return <div className="container">
    <form>
      <div className="row">
        <div className="col">
          <div class="form-group">
            <label for="sel1">Destino : </label>
            <select class="form-control" id="sel1">
              <option>Hola</option>
            </select>
          </div>
          <div class="form-group">
            <label for="sel1">Bus : </label>
            <select class="form-control" id="sel1">
              <option>Hola</option>
            </select>
          </div> 
          <div className="form-group">	
            <label htmlFor="urs">Fecha y Hora de Salida : </label>
            <input type="datetime-local" className="form-control" id="urs" />
          </div>
          <div className="form-group">	
            <label htmlFor="urs">Fecha y Hora de Llegada : </label>
            <input type="datetime-local" className="form-control" id="urs" />
          </div>       
        </div>
        <div className="col">
          <ElementsList title="Agregar Paraderos" />
          <ElementsList title="Agregar Pasajeros" />
        </div>
      </div>
    </form>
  </div>
}

export default TravelAdd;