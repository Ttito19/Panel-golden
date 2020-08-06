import { firestore } from "firebase";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FaRegEdit , FaTrashAlt } from "react-icons/fa";
import { TravelContext } from "../../../../../context/travelContext";
import useRemoveThis from "../../../../../hooks/useRemoveThis";
import ButtonWithIconForTable from "../../../../UIComponents/ButtonWithIconForTable";
import { TRAVEL_STATE } from "../../../../../constants";

const TravelListMap = ({ activeModalClient , update }) => {
  const { travelData } = useContext(TravelContext);
  const remove = useRemoveThis();
  
  const onClickDelete = async travelId => {
    try{
      const security = await remove();
      if(security){
        await firestore().collection("travel").doc(travelId).delete();
      }
    }catch(e){
      console.log(e);
    }
  }

  const { push } = useHistory();

  const convertTravelState = state => {
    switch(state){
      case TRAVEL_STATE.inTravel:
        return 'Viajando...';
      case TRAVEL_STATE.inWait:
        return 'En espera';
      case TRAVEL_STATE.travelComplete:
        return 'Completado';
    }
  }

  const onClickClients = (data) => {
    const { departureDate , arrivalDate , driver , bus , destiny } = data;
    const updateData = { departureDate, arrivalDate , driver , bus , destiny };

    console.log(updateData);

    update(updateData);
    activeModalClient();
  }

  return <>
    {
      travelData.map((v,i) => (
        <tr key={i}>
          <td>{`${v.arrivalDate.date} - ${v.arrivalDate.time}`}</td>
          <td>{`${v.departureDate.date} - ${v.departureDate.time}`}</td>
          <td>{v.driver.name || "NULL"}</td>
          <td>{v.bus.name}</td>
          <td>{convertTravelState(v.state)}</td>
          <td>{v.destiny.name}</td>
          <td>
            <button className="btn btn-sm btn-primary">Ver Clientes</button>
          </td>
          <td>
            <button onClick={() => push(`/design/${v.bus.seatDesign}`)} className="btn btn-sm btn-primary">Ver Diseño</button>
          </td>
          <td>
            <button className="btn btn-sm btn-primary">Ver Paraderos</button>
          </td>
          <td>
            {
              v.state === TRAVEL_STATE.inTravel ? 
                <span className="font-weight-light">El bus no puede ser Modificado</span> :
                <> 
                  <ButtonWithIconForTable 
                    icon={<FaRegEdit />} 
                    onClick={() => onClickClients(v)}
                  />
                  <ButtonWithIconForTable 
                    icon={<FaTrashAlt />} 
                    onClick={() => onClickDelete(v.id)} 
                    theme="danger" 
                  />
                </>
            }
          </td>
        </tr>
      ))
    }
  </>;
}

export default TravelListMap;