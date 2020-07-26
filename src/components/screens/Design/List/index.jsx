import React , { useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoaderSpinner from "../../../UIComponents/LoaderSpinner";

//Parent Context
import { SeatDesignContext } from "../../../../context/seatDesignContext";
import useRemoveThis from "../../../../hooks/useRemoveThis";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const DesignList = (props) => {
  const { loadingData , dataFromDocument , deleteSeatDesignFromId } = useContext(SeatDesignContext);
  const removeThis  = useRemoveThis();

  const DeleteById = async id => {
    const Security = await removeThis();
    if(Security)
      deleteSeatDesignFromId(id);
  }

  return <Container>
    <table className="table table-striped table-bordered text-centered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Columnas</th>
          <th>Diseño</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          loadingData ?
          <tr>
            <td colSpan="4"><LoaderSpinner color="black" /></td>
          </tr>:
            <>
              { 
                dataFromDocument.map((v,i) => (
                  <tr key={i}>
                    <td>{v.name}</td>
                    <td>{v.seatColumns}</td>
                    <td><Link className="btn btn-primary" to={`/design/update/${v.id}`}>Actualizar</Link></td>
                    <td><Link className="btn btn-primary" to={`/design/${v.id}`}>Ver Diseño</Link></td>
                    <td><button className="btn btn-danger" onClick={() => DeleteById(v.id)}>Eliminar</button></td>
                  </tr>
                ))
              } 
            </>       
        }
      </tbody>
    </table>
  </Container>
}

export default DesignList;