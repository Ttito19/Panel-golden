import { useContext, useRef, useState } from "react";
import { firestore } from "firebase";
import Swal from "sweetalert2";
import { SeatDesignContext } from "../context/seatDesignContext";

const useAddBus = () => {
  //Context
  const { dataFromDocument } = useContext(SeatDesignContext);

  //States
  const [ isSetData , setIsSetData ] = useState(false);

  //Referencias
  const refName = useRef();
  const refSeatDesign = useRef();
  const refType = useRef();

  const _viewErrorMessage = (title,text) => {
    Swal.fire({
      icon: "error",
      title,
      text,
      timer: 2000,
    });
  }

  const _searchByIndex = () => {
    try{
      const index = parseInt(refSeatDesign.current.value);
      if(!dataFromDocument[index]) 
        throw new Error("El indice del combobox no existe");

      return dataFromDocument[index].id;   
    }catch(e){
      console.log(e);
    }
  }

  const _clearInputs = () => {
    refName.current.value = "";
    refType.current.value = "";
  }

  const handlerAddBus = async ev => {
    ev.preventDefault();
    setIsSetData(true);

    const name = refName.current.value;
    const seatDesign = _searchByIndex();
    const type = refType.current.value;

    if(seatDesign && name && type){
      let data = { name, seatDesign, type }

      try {
        await firestore().collection("bus").add(data);
        Swal.fire("Éxito", "Se agrego correctamente", "success");
        _clearInputs();
      }catch(e){
        console.log(e);
        _viewErrorMessage("Lo sentimos","Ocurrio un error al registrar los datos");
      }finally {
        setIsSetData(false);
      }
    }else {
      _viewErrorMessage("Lo sentimos","Existen campos invalidos");
    }
  };

  return {
    refName,
    refSeatDesign,
    refType,
    handlerAddBus,
    isSetData,
  }
}

export default useAddBus;