import React, { useContext } from "react";
import Input from "../../UIComponents/Input";
import useAddBus from "../../../hooks/useAddBus";
import { SeatDesignContext } from "../../../context/seatDesignContext";
import SeatComboBox from "../../UIComponents/SeatComboBox";

function AddBus() {
  const { loadingData } = useContext(SeatDesignContext);
  const { refName, refType , refSeatDesign , handlerAddBus , isSetData } = useAddBus();

  return (
    <div className="container">
      <form onSubmit={handlerAddBus} className="form-group">
        <div className="col-6">
          <Input name="Nombre del Bus" type="text" refs={refName} />
          <SeatComboBox reference={refSeatDesign} />
          <Input name="Tipo" type="text" refs={refType} />
        </div>
        <div className="btn pb-2">
          <button disabled={loadingData || isSetData} className="btn btn-primary" >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBus;
