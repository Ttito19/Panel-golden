import { firestore } from "firebase";
import { useState } from "react";
import { TRAVEL_STATE } from "../constants";

const useAddTravel = () => {
  //States
  const [ lockButtonInsert , setLockButtonInsert ] = useState(false);
  const [ selectedBus , setSelectedBus ] = useState(null);
  const [ selectedDestiny , setSelectedDestiny ] = useState(null);
  const [ currentClients , setCurrentClients ] = useState([]);
  const [ currentBusStop , setCurrentBusStop ] = useState([]);
  const [ departureDate , setDepartureDate ] = useState(null);
  const [ arrivalDate , setArrivalDate ] = useState(null);
  const [ driver, setDriver ] = useState(null);

  //Funciones para cambiar los estados para la insercion de datos
  const onChangeBus = ev => setSelectedBus(ev.value);
  const onChangeDestiny = ev => setSelectedDestiny(ev.value);
  const onChangeClients = ev => setCurrentClients(ev);
  const onChangeDepartureDate = ev => setDepartureDate(ev.target.value);
  const onChangeArrivalDate = ev => setArrivalDate(ev.target.value);
  const onChangeDriver = ev => setDriver(ev.value);
  const onAddBusStop = data => setCurrentBusStop([ ...currentBusStop , data ]);

  //Funciones Convertoras de Datos
  const convertToClientFormat = array => array.map(v => v.value);

  const convertToBusStopFormat = async array => {
    let busStopData = [],
      busStopId = array.map(v => ({ time : v.time, id : v.value }) );

    try{
      for(let v of busStopId){
        const bs = await firestore().collection("busStop").doc(v.id).get();
        busStopData.push({
          ...bs.data(),
          time : v.time
        })
      }     

      return busStopData;
    }catch(e) {
      console.log(e);
      return null;
    }

    return null;
  }
  const convertToSeatFormat = array => {
    let seatData = [];
    for(let seatName of array){
      if(!seatName) seatData.push("");
      else{
        seatData.push({
          client : "",
          name :  seatName
        });
      }
    }
    return seatData;
  }
  const convertToTimeFormat = date => {
    const arrDate = date.split('T');
    return {
      date : arrDate[0],
      time : arrDate[1]
    }
  }

  //Obtener los asientos de acuerdo al bus (con su respectivo formato)
  const getSeats = async busId => {
    const refBus = firestore().collection('bus'),
      refDesign = firestore().collection('seatDesign');

    try{
      const bus = await refBus.doc(busId).get();
      const { seatDesign } = bus.data();

      //Design Obtains
      const design = await refDesign.doc(seatDesign).get();
      if(design.exists){
        const { seatColumns , seats } = design.data();
        return {
          seatColumns,
          seats : convertToSeatFormat(seats)
        };
      }

      return null;
    }catch(e){
      console.log(e);
      return null;
    }
  }

  //Evento de añadir
  const onSubmit = async ev => {
    ev.preventDefault();

    if(!selectedBus || !selectedDestiny || !currentBusStop.length || !arrivalDate || !departureDate || !driver){
      alert('Existen Campos Vacios');
      return;
    }

    setLockButtonInsert(true);

    try{
      //Arrays
      const BusStopReqData = await convertToBusStopFormat(currentBusStop);
      const ClientReqData = convertToClientFormat(currentClients);

      //Seat
      const SeatReqData = await getSeats(selectedBus);

      //Dates
      const arrivalDateReqData = convertToTimeFormat(arrivalDate);
      const departureDateReqData = convertToTimeFormat(departureDate);

      let GeneralData = {
        arrivalDate : arrivalDateReqData,
        busId : selectedBus,  //State
        destiny : selectedDestiny,  //State
        busStop : BusStopReqData,
        departureDate : departureDateReqData,
        clients : ClientReqData,
        seatColumns : SeatReqData.seatColumns,
        seats : SeatReqData.seats,
        driverId : driver,
        state : TRAVEL_STATE.inWait
      }

      await firestore().collection('travel').add(GeneralData);
      window.location.reload();
    }catch(e){
      console.log(e);
      setLockButtonInsert(false);
    }
  }

  return {
    arrivalDate,
    departureDate,
    currentBusStop,
    onSubmit,
    onChangeBus,
    lockButtonInsert,
    onChangeDestiny,
    onChangeClients,
    onAddBusStop,
    onChangeDepartureDate,
    onChangeArrivalDate,
    onChangeDriver
  }
}

export default useAddTravel;