import React from "react";
import Swal from "sweetalert2";

const useRemoveThis = () => {

  const isRemove = async () => {
    try {
      const result = await Swal.fire({
        title: 'Eliminar registro',
        text: "¿Estas seguro que deseas eliminar este registro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Estoy de acuerdo'
      });

      return result.value;
    }catch(e){
      console.log(e);
    }
  }

  return isRemove;
}

export default useRemoveThis;