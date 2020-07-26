import React from 'react';
import { useParams } from 'react-router-dom';


const EmpresaTravels = () => {
    
    const {id} = useParams();

    return (
        <div>
            <h3> Listado de Viajes de la empresa </h3>
            Este es el id de la empresa seleccionada : {id}.
        </div>
    )
}

export default EmpresaTravels;