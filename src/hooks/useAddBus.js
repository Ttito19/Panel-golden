import { useRef, useState } from "react";
import { firestore } from "firebase";
import Swal from "sweetalert2";
import useSearchByIndexBus from "./useSearchByIndexBus";

const useAddBus = () => {
  //Context
  const searchByIndex = useSearchByIndexBus();

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

  const _clearInputs = () => {
    refName.current.value = "";
    refType.current.value = "";
  }

  const handlerAddBus = async ev => {
    ev.preventDefault();
    setIsSetData(true);

    const name = refName.current.value;
    const seatDesign = searchByIndex(refSeatDesign.current.value);
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