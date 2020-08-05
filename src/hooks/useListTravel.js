import { firestore } from "firebase";
import { useState } from "react";

const useListTravel = () => {
  const [ updateData , setUpdateData ] = useState();
  const [ isShowClients , setIsShowClients ] = useState(false);

  const toggleShowClients = () => setIsShowClients(!isShowClients);

  return {
    isShowClients,
    toggleShowClients,
    updateData,
    setUpdateData
  }
}

export default useListTravel;