import { firestore } from "firebase";
import React, { useContext } from "react";
import { FaRegEdit , FaTrashAlt } from "react-icons/fa";
import { TravelContext } from "../../../../../context/travelContext";
import useRemoveThis from "../../../../../hooks/useRemoveThis";
import ButtonWithIconForTable from "../../../../UIComponents/ButtonWithIconForTable";

const TravelListMap = () => {
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

  return <>
    {
      travelData.map((v,i) => (
        <tr key={i}>
          <td>{`${v.arrivalDate.date} - ${v.arrivalDate.time}`}</td>
          <td>{`${v.departureDate.date} - ${v.departureDate.time}`}</td>
          <td>{v.driver.name}</td>
          <td>{v.bus.name}</td>
          <td>{v.bus.active ? "Si" : "No"}</td>
          <td>{v.destiny.name}</td>
          <td>
            <button className="btn btn-sm btn-primary">Ver Clientes</button>
          </td>
          <td>
            <button className="btn btn-sm btn-primary">Ver Diseño</button>
          </td>
          <td>
            <button className="btn btn-sm btn-primary">Ver Paraderos</button>
          </td>
          <td>
            {
              v.bus.active ? 
                <span className="font-weight-light">El bus no puede ser Modificado porque se encuentra en un viaje</span> :
                <> 
                  <ButtonWithIconForTable icon={<FaRegEdit />} />
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