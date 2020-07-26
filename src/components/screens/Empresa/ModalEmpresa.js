import React , {useRef,useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import Input from '../../UIComponents/Input/';
import { firestore } from 'firebase';
import Swal from 'sweetalert2';

const ModalEmpresa = (props) => {

    const fs = firestore();
    const direccion = useRef();
    const distrito = useRef();
    const nombre = useRef();
    const razon = useRef();
    const ruc = useRef();

    useEffect( ()=>{
        
        //#region - Pasar datos seleccionados para editar a los inputs. 
        if ( props.show ) {
            var data = props.dataEmpresa.data;

            direccion.current.value = data.direccion;
            distrito.current.value = data.distrito;
            nombre.current.value = data.name;
            razon.current.value = data.razon;
            ruc.current.value = data.ruc;
        }
        //#endregion

    })

    //#region - Actualizar datos de la empresa. 

    // Falta actualizar documento imagen.
    const updateEmpresa = () => {
        fs.collection('company').doc(props.dataEmpresa.id).update({
            direccion : direccion.current.value,
            distrito : distrito.current.value,
            name : nombre.current.value,
            razon : razon.current.value,
            ruc : ruc.current.value
        })
        .then( _ => { Swal.fire("Éxito","Se cambiaron los datos","success"); } )
        .catch( _ => { console.log("Ha ocurrido un error al momento de actualizar") } )
    }

    //#endregion


    return (
        <Modal show={props.show} onHide={props.hide}>
            <Modal.Header>
                <Modal.Title> Actualizar Empresa </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Input 
                    name = "Direccion"
                    type = "text"
                    refs = {direccion}
                />
                <Input 
                    name = "Distrito"
                    type = "text"
                    refs = {distrito}
                />
                <Input 
                    name = "Nombre"
                    type = "text"
                    refs = {nombre}
                />
                <Input 
                    name = "Razon"
                    type = "text"
                    refs = {razon}
                />
                <Input 
                    name = "Ruc"
                    type = "text"
                    refs = {ruc}
                />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={props.hide}> Cerrar </button>
                <button className="btn btn-primary" onClick={updateEmpresa}> Cambiar </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEmpresa;