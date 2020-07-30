import React , {useState}from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from 'firebase';
import LoadingSpinner from '../../UIComponents/LoaderSpinner/'




const ModalBusStop = () => {
    return (
        <div>

        </div>
    )
}


const EmpresaTravels = () => {
    
    const fs = firestore();
    const { id } = useParams();
    const [ travels , setTravels ] = useState([]);
    const [ isLoadingInformation , setLoadingInformation ] = useState(false);

    (()=>{

    })()

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Arrival Date</th>
                    <th>Bus ID</th>
                    <th>Bus Stop</th> 
                    <th>Clientes</th>
                    <th>Departure Date</th>
                    <th>Destino</th>
                    <th>seatColumns</th>
                    <th>seats</th>
                </tr>
            </thead>
            <tbody>
                {
                    isLoadingInformation ?
                    travels.map( e => {
                        return (
                            <tr key=""> 
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )
                    })
                    :
                    <tr><td colSpan="8"><LoadingSpinner /></td></tr>
                }
            </tbody>
        </table>
    )
}

export default EmpresaTravels;