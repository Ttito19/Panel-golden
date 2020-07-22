import { useContext } from "react";
import { SeatDesignContext } from "../context/seatDesignContext";

const useSearchByIndexBus = () => {
  const { dataFromDocument } = useContext(SeatDesignContext);

  const _searchByIndex = value => {
    try{
      const index = parseInt(value);
      if(!dataFromDocument[index]) 
        throw new Error("El indice del combobox no existe");

      return dataFromDocument[index].id;   
    }catch(e){
      console.log(e);
    }
  }

  return _searchByIndex;
}

export default useSearchByIndexBus;