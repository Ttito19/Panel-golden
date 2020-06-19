import React , { useContext } from "react";
import "./index.scss";

import { SeatContext } from "../../../../context/seatContext";
import Seat from "./Seat";
import Input from "./Input";
import Button from "./Button";

const SeatList = () => {
  //Context
  const { seatTemplate , seatNumber , edit , changeNameDesign , columns, editEnabled, createSeatTemplate, changeColumns, designSave } = useContext(SeatContext);

  const onChangeSeat = (ev) => createSeatTemplate(ev.target.value);
  const onChangeColumns = (ev) => changeColumns(ev.target.value);
  const onChangeName = (ev) => changeNameDesign(ev.target.value);

  return <section className="section-design">
    <div className="container-actions">
      <div className="container-inputs">
        <Input title="Nombre del Diseño" onChange={onChangeName} />
        <Input title="Numero de Asientos" onChange={onChangeSeat} />
        <Input title="Numero de Columnas" DefValue={columns} onChange={onChangeColumns} />
      </div>  
      <div className="container-buttons">
        <Button text={!edit ? "Editar Nombres" : "Guardar" } ghost onClick={editEnabled} />
        { !edit ? <Button text="Guardar Diseño" onClick={designSave} /> : null }
      </div>
    </div>
    <div className="container-seat-design">
      <div className="container-seat" style={{ gridTemplateColumns : `repeat(${columns},1fr)` }} >
        { seatTemplate.map((v,i) => <Seat edit={v.edit} name={v.name} id={i} key={i} />) }
      </div>      
    </div>
  </section>
}

export default SeatList;