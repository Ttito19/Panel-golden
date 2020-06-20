import React , { useState , createContext, useEffect, useRef } from "react";
import { useFirebaseApp } from "reactfire";

const SeatContext = createContext();
const SeatProvider = (props) => {
  const { children } = props;

  //Firestore
  const { firestore } = useFirebaseApp();

  //Referencias
  const refInputSeatNumber = useRef();
  const refInputSeatDesignName = useRef();
  const refInputSeatColumn = useRef();

  //States
  const [ seatCreate , setSeatCreate ] = useState(false);
  const [ columns , setColumns ] = useState(0);
  const [ edit , setEdit ] = useState(false);
  const [ seatTemplate , setSeatTemplate ] = useState([]);

  /**Actions**/

  // - Habilitar la edicion de los asientos
  const editEnabled = () => {
    let template = [...seatTemplate];

    template = template.map(v => {
      if(v !== "*") return { name : v.name, edit : !edit }
      else return v;
    });

    setEdit(!edit);
    setSeatTemplate(template);

    if(refInputSeatColumn.current && refInputSeatNumber.current){
      refInputSeatNumber.current.disabled = !edit;
      refInputSeatColumn.current.disabled = !edit;      
    }
  }

  // - Actualizar el nombre del asiento
  const updateSeat = (index, value) => {
    let template = [...seatTemplate];
    template[index].name = value.toUpperCase();
    setSeatTemplate(template);
  }

  // - Bloqueo de un asiento
  const hideSeat = (index,hide) => {
    let template = [...seatTemplate];

    if(!hide) template[index] = "*";
    else template[index] = { name : "" , edit : false }

    setSeatTemplate(template);    
  }

  // - Crear Asientos / Actualizar Asientos
  const createSeatTemplate = (ev) => {
    ev.preventDefault();

    let template = [],
      seatNumber = refInputSeatNumber.current.value,
      columns = refInputSeatColumn.current.value;

    if(seatNumber && columns){
      let question = true;

      if(seatTemplate.length){
        let ts = [...seatTemplate];
        for(let i = 0; i < ts.length; i++){
          if(ts[i].name){
            question = window.confirm("Al actualizar la estructura todos los nombres se resetearan tambien. ¿Esta Seguro de esto?");
            break;
          }
        }
      }

      if(question){
        for(var i = 0; i < seatNumber; i++){
          template.push({
            name : "",
            edit : false
          })
        }

        setColumns(columns);
        setSeatTemplate(template);
        setSeatCreate(true);         
      }
    }else {
      alert("Usted no puede hackear este sistema >:v");
    }
  }

  // - Guardar Diseño
  const designSave = async () => {
    if(!seatTemplate.length){
      alert("No tienes ningun asiento agregado");
      return;
    }else if(!refInputSeatDesignName.current.value){
      alert("El diseño necesita un nombre");
      return;
    }

    let count = 0;
    for(let item of seatTemplate) if(item === "") ++count;

    if(count === seatTemplate.length){
      alert("El diseño debe de tener al menos un asiento valido");
    }else{
      let seatData = [];
      for(var i = 0; i < seatTemplate.length; i++){
        if(seatTemplate[i] !== "*"){
          let key = seatTemplate[i].name ? seatTemplate[i].name : "AD";
          seatData.push(key);
        }else{
          seatData.push("");
        }
      }

      var data = {
        name : refInputSeatDesignName.current.value,
        seats : seatData,
        seatColumns : refInputSeatColumn.current.value
      }

      try{
        await firestore().collection("seatDesign").add(data);
        alert("Se agrego el nuevo diseño");
      }catch(e){
        console.log(e);
      }
    }
  }

  return <SeatContext.Provider value={{ 
    refInputSeatNumber,
    refInputSeatDesignName,
    refInputSeatColumn,
    seatTemplate,
    seatCreate,
    edit,
    columns,
    hideSeat,
    designSave,
    updateSeat,
    editEnabled,
    createSeatTemplate,
  }}>
    {children}
  </SeatContext.Provider>
}

export {
  SeatProvider,
  SeatContext
}