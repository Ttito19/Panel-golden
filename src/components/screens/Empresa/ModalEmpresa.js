import React , {useRef,useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import Input from '../../UIComponents/Input/';
import {firestore} from 'firebase';
import Swal from 'sweetalert2';

const ModalEmpresa = (props) => {

    const fs = firestore();
    const direccion = useRef();
    const distrito = useRef();
    const nombre = useRef();
    const razon = useRef();
    const ruc = useRef();

    //const [data,setData] = useState(props.dataEmpresa);

    useEffect(()=>{
        if ( props.show ) {
            var data = props.dataEmpresa.data;
            direccion.current.value = data.direccion;
            distrito.current.value = data.distrito;
            nombre.current.value = data.name;
            razon.current.value = data.razon;
            ruc.current.value = data.ruc;
        }
    })

    const updateEmpresa = () => {
        fs.collection('company').doc(props.dataEmpresa.id).update({
            direccion : direccion.current.value,
            distrito : distrito.current.value,
            name : nombre.current.value,
            razon : razon.current.value,
            ruc : ruc.current.value
        })
        .then(_=>{
            Swal.fire("Éxito", "Se cambiaron los datos", "success");
        })
        .catch(_=>{ console.log("Ha ocurrido un error al momento de actualizar") })
    }

    const change = () => {  }

    return (
        <Modal show={props.show} onHide={props.hide}>
            <Modal.Header>
                <Modal.Title> Actualizar Empresa </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Input 
                    defaultValue= ""
                    name = "Direccion"
                    type = "text"
                    onChange = {change}
                    refs = {direccion}
                />
                <Input 
                    defaultValue= ""
                    name = "Distrito"
                    type = "text"
                    onChange = {change}
                    refs = {distrito}
                />
                <Input 
                    defaultValue= ""
                    name = "Nombre"
                    type = "text"
                    onChange = {change}
                    refs = {nombre}
                />
                <Input 
                    defaultValue= ""
                    name = "Razon"
                    type = "text"
                    onChange = {change}
                    refs = {razon}
                />
                <Input 
                    defaultValue= ""
                    name = "Ruc"
                    type = "text"
                    onChange = {change}
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