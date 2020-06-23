import React from "react";
import TemplateDesign from "../TemplateDesign";
import { SeatProvider } from "../../../../context/seatContext";

const DesignAdd = () => {
  return <SeatProvider>
    <TemplateDesign />
  </SeatProvider>
}

export default DesignAdd;