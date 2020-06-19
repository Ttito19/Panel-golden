import React , { useState , createContext } from "react";

const SeatContext = createContext();
const SeatProvider = (props) => {
  const { children } = props;

  //States
  const [ edit , setEdit ] = useState(false);
  const [ columns , setColumns ] = useState(0);
  const [ seatNumber , setSeatNumber ] = useState(0);
  const [ seatTemplate , setSeatTemplate ] = useState([]);

  /**Actions**/

  // - Editar Columnas
  const changeColumns = (value) => setColumns(value);

  // - Habilitar la edicion de los asientos
  const editEnabled = () => {
    let template = [...seatTemplate];

    template = template.map(v => {
      return { ...v, edit : !edit }
    });

    setEdit(!edit);
    setSeatTemplate(template);
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

    if(!hide) template[index] = "-";
    else template[index] = { name : "" , edit : false }
    
    setSeatTemplate(template);    
  }

  // - Crear Asientos
  const createSeatTemplate = (value) => {
    let template = [];
    for(var i = 0; i < value; i++){
      template.push({
        name : "",
        edit : false
      })
    }
    setSeatTemplate(template);
  }

  // - Guardar Diseño
  const designSave = () => {
    if(!seatTemplate.length){
      alert("No tienes ningun asiento agregado");
      return;
    }

    let count = 0;
    for(let item of seatTemplate) if(item === "") ++count;

    if(count === seatTemplate.length){
      alert("El diseño debe de tener al menos un asiento valido");
    }else{
      let seatData = [];
      for(var i = 0; i < seatTemplate.length; i++){
        if(seatTemplate[i] !== "-"){
          let key = seatTemplate[i].name ? seatTemplate[i].name : "AD";
          seatData.push(key);
        }else{
          seatData.push("");
        }
      }

      console.log(seatData);
    }
  }

  return <SeatContext.Provider value={{ 
    seatTemplate, 
    columns, 
    edit,
    seatNumber,
    editEnabled,
    updateSeat,
    hideSeat,
    changeColumns,
    createSeatTemplate,
    designSave
  }}>
    {children}
  </SeatContext.Provider>
}

export {
  SeatProvider,
  SeatContext
}