import React from "react";
import TemplateDesign from "../TemplateDesign";
import { SeatProvider } from "../../../../context/seatContext";

const DesignUpdate = () => {
  return <SeatProvider>
    <TemplateDesign view />
  </SeatProvider>
}

export default DesignUpdate;