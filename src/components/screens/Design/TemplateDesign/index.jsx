import React , { useContext } from "react";
import "./index.scss";

import { SeatContext } from "../../../../context/seatContext";
import Seat from "./Seat";
import Input from "./Input";

const SeatList = () => {
  //Context
  const { seatTemplate , seatNumber , edit , columns, editEnabled, createSeatTemplate, changeColumns, designSave } = useContext(SeatContext);

  const onChangeSeat = (ev) => createSeatTemplate(ev.target.value)
  const onChangeColumns = (ev) => changeColumns(ev.target.value);

  return <section className="section-design">
    <div className="container-actions">
      <div className="container-inputs">
        <Input title="Nombre del Diseño" />
        <Input title="Numero de Asientos" onChange={onChangeSeat} />
        <Input title="Numero de Columnas" onChange={onChangeColumns} />
      </div>  
      <div>
        <button onClick={editEnabled}>{!edit ? "Editar Nombres" : "Guardar" }</button>
      </div>    
      {
        !edit ? <div>
          <button onClick={designSave}>Guardar Datos</button>
        </div> : null
      }
    </div>
    <div className="container-seat-design">
      <div className="container-seat" style={{ gridTemplateColumns : `repeat(${columns},1fr)` }} >
        { seatTemplate.map((v,i) => <Seat edit={v.edit} name={v.name} id={i} key={i} />) }
      </div>      
    </div>
  </section>
}

export default SeatList;