import React from "react";
import SeatList from "../SeatList";
import { SeatProvider } from "../../../../context/SeatDesign";

const DesignAdd = () => {
  return <SeatProvider>
    <SeatList />
  </SeatProvider>
}

export default DesignAdd;