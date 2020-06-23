import React from "react";

//Components
import TemplateDesign from "../TemplateDesign";

//Parent Context
import { SeatProvider } from "../../../../context/seatContext";

const DesignAdd = () => {
  return <SeatProvider>
    <TemplateDesign update={true} />
  </SeatProvider>
}

export default DesignAdd;