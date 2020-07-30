import { firestore } from "firebase";
import { useRef, useState } from "react";

function ModelDate(_date,_time){
  this.date = _date;
  this.time = _time;
}

function ModelTravel (
  _destiny, 
  _driver,
  _busId, 
  _clients,
  _busStop,
  _arrivalDate,
  _departureDate,
  _seatColumns,
  _seats
) {
  this.destiny = _destiny;
  this.driver = _driver;
  this.busId = _busId;
  this.clients = _clients;
  this.busStop = _busStop;
  this.arrivalDate = _arrivalDate;
  this.departureDate = _departureDate;
  this.seatColumns = _seatColumns;
  this.seats = _seats;
  this.active = false;
}

const useAddTravel = () => {
  //References
  const currentDepartureDate = useRef();
  const currentArrivalDate = useRef();

  //States
  const [ selectedBus , setSelectedBus ] = useState(null);
  const [ selectedDestiny , setSelectedDestiny ] = useState(null);
  const [ currentClients , setCurrentClients ] = useState([]);
  const [ currentBusStop , setCurrentBusStop ] = useState([]);

  const onChangeBus = ev => setSelectedBus(ev.value);
  const onChangeDestiny = ev => setSelectedDestiny(ev.value);
  const onChangeClients = ev => setCurrentClients(ev.value);
  const onChangeBusStop = ev => setCurrentBusStop(ev.value);

  const convertToClientFormat = array => array.map(v => v.value);
  const convertToBusStopFormat = async array => {
    let busStopData = [];
    
    array.forEach(async v => {
      let requestId = v.value;
      try{
        const bs = await firestore().collection("busStop").doc(requestId).get();
        // busStopData.push({
        //   ...bs.data(),
        //   time : 
        // })
      }catch(e) {
        console.log(e);
      }
    })

    return busStopData;
  }
  const convertToSeatFormat = array => {
    let seatData = [];
    for(let seatName of array){
      seatData.push({
        client : "",
        name :  seatName
      });
    }
    return seatData;
  }

  const onSubmit = async ev => {
    ev.preventDefault();
  }

  return {
    currentArrivalDate,
    currentDepartureDate,
    onSubmit,
    onChangeBus,
    onChangeDestiny,
    onChangeClients,
    onChangeBusStop
  }
}

export default useAddTravel;