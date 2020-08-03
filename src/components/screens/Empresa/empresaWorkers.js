import React , { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from 'firebase';
import LoaderSpinner from '../../UIComponents/LoaderSpinner/';
import Swal from 'sweetalert2';

const EmpresaWorkers = () => {

    const { id } = useParams();
    const [ workers ] = useState([]);
    const [ isLoadingInformation , setLoadingInformation] = useState(false);
    const fs = firestore(); 
    
    useEffect( async () => {
        try {
            // Cambiar fullName por campo de la id de la empresa
          var data = await fs.collection('clients').where('fullName','==',id).get()
            data.forEach( doc => workers.push(doc.data()) )
            setLoadingInformation(true);  
        }catch (e){ console.log(e.message) }
        
    });

    const showImage =(refImage)=>{
        Swal.fire({
            imageUrl: refImage.url,
            imageHeight: 400,
            imageAlt: refImage.name
        })
    }

    return (
        <table className = "table">
            <thead>
                <tr>
                    <th> Ciudad </th>
                    <th> Codigo </th>
                    <th> Dni </th>
                    <th> Email </th>
                    <th> Nombre Completo </th>
                    <th> Celular </th>
                    <th> Imagen Dni </th>
                    <th> Foto del cliente </th>
                </tr>
            </thead>
            <tbody>
            {
                isLoadingInformation ?
                workers.map( e => {
                    return (
                        <tr key={e.fullName}>
                            <td> { e.city } </td>
                            <td> { e.code } </td>
                            <td> { e.dni } </td>
                            <td> { e.email } </td>
                            <td> { e.fullName } </td>
                            <td> { e.phone } </td>
                            <td> <img src={ e.documentImage.url } onClick={()=> showImage(e.documentImage) } height="60px" width="60px" /> </td>
                            <td> <img src={ e.profileImage.url } onClick={()=> showImage(e.profileImage) } height="60px" width="60px" /> </td>
                        </tr>
                    )
                }) 
                : 
                <tr>
                    <td colSpan="8"><LoaderSpinner /></td>
                </tr>
            } 
            </tbody>
        </table>
    )
}

export default EmpresaWorkers;