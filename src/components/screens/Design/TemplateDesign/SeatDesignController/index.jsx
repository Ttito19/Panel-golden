import React, { useContext } from "react";
import { Redirect , useRouteMatch } from "react-router-dom";
import { GrTools } from "react-icons/gr";
import "./index.scss";

//Components
import Seat from "./Seat";
import LoaderSpinner from "../../../../UIComponents/LoaderSpinner";

//Parent Context
import { SeatContext } from "../../../../../context/seatContext";
import { SeatDesignContext } from "../../../../../context/seatDesignContext";

const SeatDesignController = props => {
  //Props
  const { view , update } = props;

  //Context
  const { seatTemplate, columns } = useContext(SeatContext);
  const { searchSeatDesignFromId , loadingData } = useContext(SeatDesignContext);

  //Hooks
  const { params } = useRouteMatch();

  if(view){
    if(loadingData) 
      return <LoaderSpinner height="100%" color="black" />

    const data = searchSeatDesignFromId(params.id);

    if(!data) 
      return <Redirect to="/listDesign" />

    return <div className="container-seat-design">
      <div className="container-seat" style={{ gridTemplateColumns : `repeat(${data.seatColumns},1fr)` }} >
        { 
          data.seats.map((v,i) => {
            if(v) return <Seat name={v} key={i} view />
            else return <Seat hideSeatProp={true} name={v} key={i} view />
          }
        )}
      </div>      
    </div>
  }else if(update) {
    
  }

  return <div className="container-seat-design">
    {
      seatTemplate.length > 0 ? 
        <div className="container-seat" style={{ gridTemplateColumns : `repeat(${columns},1fr)` }}>
          { seatTemplate.map((v,i) => <Seat edit={v.edit} name={v.name} id={i} key={i} />) }
        </div> :
        <div className="container-seat no-design" >
          <div className="container-no-design">
            <h5 className="title">
              <div className="icon">
                <GrTools />
              </div>
              <span>Comienze a crear un Diseño.</span>
            </h5>
          </div>
        </div>   
    }
  </div>
}

export default SeatDesignController;