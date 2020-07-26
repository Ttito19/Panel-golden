import React, { useContext } from "react";
import { SeatDesignContext } from "../../../context/seatDesignContext";

const SeatComboBox = ({ reference }) => {
  const { loadingData , dataFromDocument } = useContext(SeatDesignContext);

  return <>
    <label>Diseño de asientos</label>
    { 
      !loadingData ?
        <select className="custom-select" ref={reference}>
          { dataFromDocument.map((v,i) => <option key={i} value={i}>{v.name}</option>) }
        </select>  : null 
    }
  </>
}

export default SeatComboBox;