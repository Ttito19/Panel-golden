import { useState } from 'react';
import { firestore } from 'firebase';

const bool = value => value ? 1 : 0;

const useUpdateTravelData = (id , closeModal) => {
  const [ departureDate , setDepartureDate ] = useState();
  const [ arrivalDate , setArrivalDate ] = useState();
  const [ driver , setDriver ] = useState();
  const [ destiny , setDestiny ] = useState();
  const [ bus , setBus ] = useState();
  const [ isUpdating , setIsUpdating ] = useState(false);

  const convertToTimeFormat = date => {
    const arrDate = date.split('T');
    return {
      date : arrDate[0],
      time : arrDate[1]
    }
  }

  const clearStates = () => {
    setDepartureDate();
    setArrivalDate();
    setDriver();
    setDestiny();
    setBus();
  }

  const onSubmit = async ev => {
    ev.preventDefault();

    const options = bool(departureDate) + bool(arrivalDate) + bool(driver) + bool(destiny) + bool(bus) + bool(id);
    if(options < 2) {
      alert('Ingrese almenos un valor');
      return;
    }

    setIsUpdating(true);

    let dataToRequest = {};

    if(departureDate) dataToRequest['departureDate'] = convertToTimeFormat(departureDate);
    if(arrivalDate) dataToRequest['arrivalDate'] = convertToTimeFormat(arrivalDate);
    if(driver) dataToRequest['driverId'] = driver;
    if(destiny) dataToRequest['destiny'] = destiny;
    if(bus) dataToRequest['busId'] = bus;

    try{
      await firestore().collection('travel').doc(id).update(dataToRequest);
      closeModal();
      clearStates();
    }catch(e){
      console.log(e);
    }

    setIsUpdating(false);
  }

  return {
    setDepartureDate,
    setArrivalDate,
    setDriver,
    setDestiny,
    setBus,
    onSubmit,
    isUpdating
  }
}

export default useUpdateTravelData;