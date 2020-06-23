import React from 'react'
import useUsuario from '../../../hooks/useUsuario'
import Input from '../../subcomponets/Input'

const AddUsuario = () => {
    
    const { changeUsername,changePassword,changeNickName,changeTipoUsuario,createUser } = useUsuario()

    return(
        <div className="AddUsuario">

            <label > Username </label>
            <input type="text" onChange={ changeUsername }/>
            <label > Password </label>
            <input type="text" onChange={ changePassword } />  
            <label > Nombre de usuario </label>
            <input type="text" onChange={ changeNickName } />
            <select onChange={changeTipoUsuario} >
                <option value="moderator" > Moderador </option>
                <option value="general" > General </option>
            </select>          
            <button onClick={createUser}> Crear Usuario </button>                  
        </div>
    )
}

export default AddUsuario