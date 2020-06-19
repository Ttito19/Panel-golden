import React , { useContext } from "react";
import "./index.scss";

import { SeatContext } from "../../../../context/SeatDesign";
import Seat from "./Seat";

const SeatList = () => {
  //Context
  const { seatTemplate , seatNumber , edit , columns, editEnabled, createSeatTemplate, changeColumns, designSave } = useContext(SeatContext);

  const onChangeSeat = (ev) => createSeatTemplate(ev.target.value)
  const onChangeColumns = (ev) => changeColumns(ev.target.value);

  return <>
    <div>
      <input type="number" defaultValue={seatNumber} onChange={onChangeSeat} placeholder="Numero de asientos" />
    </div>
    <div>
      <input type="number" defaultValue={columns} onChange={onChangeColumns} placeholder="Numero de columnas" />
    </div>
    <div>
      <button onClick={editEnabled}>{!edit ? "Editar Nombres" : "Guardar" }</button>
    </div>
    <div className="container-seat" style={{ gridTemplateColumns : `repeat(${columns},1fr)` }} >
      { seatTemplate.map((v,i) => <Seat edit={v.edit} name={v.name} id={i} key={i} />) }
    </div>
    {
      !edit ? <div>
        <button onClick={designSave}>Guardar Datos</button>
      </div> : null
    }
  </>
}

export default SeatList;