import { firestore } from "firebase";
import { useState } from "react";

const useListTravel = () => {
  const [ isShowClients , setIsShowClients ] = useState(false);

  const toggleShowClients = () => setIsShowClients(!isShowClients);

  return {
    isShowClients,
    toggleShowClients
  }
}

export default useListTravel;