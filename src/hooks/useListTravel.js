import { useState } from "react";

const initialUpdateData = {
  id : '',
  driver : {
    id : '',
    name : ''
  },
  bus : {
    id : '',
    name : ''  
  },
  departureDate : {
    date : '',
    time : ''
  },
  arrivalDate : {
    date : '',
    time : '' 
  }
}

const useListTravel = () => {
  const [ updateData , setUpdateData ] = useState(initialUpdateData);
  const [ isShowClients , setIsShowClients ] = useState(false);

  const toggleShowClients = () => setIsShowClients(!isShowClients);

  const setUpdateDataModal = data => setUpdateData(data);

  return {
    isShowClients,
    toggleShowClients,
    updateData,
    setUpdateDataModal
  }
}

export default useListTravel;