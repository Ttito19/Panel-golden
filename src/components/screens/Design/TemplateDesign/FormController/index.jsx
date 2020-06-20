import React , { useContext } from "react";
import "./index.scss";

//Components
import Button from "../Button";
import Input from "./Input";

//Parent Context
import { SeatContext } from "../../../../../context/seatContext";

const FormController = () => {
  //Context
  const { 
    edit,
    editEnabled,
    designSave,
    seatCreate,
    createSeatTemplate,
    refInputSeatNumber,
    refInputSeatDesignName,
    refInputSeatColumn 
  } = useContext(SeatContext);

  return <form onSubmit={createSeatTemplate} className="container-actions">
    <div className="container-inputs">
      <Input typeInput="text" reference={refInputSeatDesignName} title="Nombre del Diseño"/>
      <Input typeInput="number" reference={refInputSeatNumber} title="Numero de Asientos" />
      <Input typeInput="number" reference={refInputSeatColumn} title="Numero de Columnas" />
    </div>  
    <div className="container-buttons">
      { !edit ? <Button text={ seatCreate ? "Actualizar Estructura" : "Crear Estructura" } /> : null }
      { seatCreate ? <Button type="button" text={!edit ? "Editar Nombres" : "Guardar Nombres" } ghost onClick={editEnabled} /> : null }
      { seatCreate && !edit ? <Button type="button" text="Guardar Diseño" onClick={designSave} /> : null }
    </div>
  </form>
}

export default FormController;