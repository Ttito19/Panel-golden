import React , { useContext } from "react";
import { Redirect , useRouteMatch } from "react-router-dom";
import "./index.scss";

//Parent Context
import { SeatDesignContext } from "../../../../context/seatDesignContext";
import { SeatContext } from "../../../../context/seatContext";

//Components
import Seat from "./Seat";
import FormController from "./FormController";
import LoaderSpinner from "../../../UIComponents/LoaderSpinner";

const TemplateDesign = props => {
  const { view } = props;

  //Hooks
  const { params } = useRouteMatch();

  //Context
  const { seatTemplate, columns } = useContext(SeatContext);
  const { searchSeatDesignFromId , loadingData } = useContext(SeatDesignContext);

  if(view){

    if(loadingData) 
      return <LoaderSpinner height="100%" color="black" />

    const data = searchSeatDesignFromId(params.id);

    if(!data) 
      return <Redirect to="/listDesign" />

    return <section className="section-design view-design">
      <div className="container-seat-design">
        <div className="container-seat" style={{ gridTemplateColumns : `repeat(${data.seatColumns},1fr)` }} >
          { 
            data.seats.map((v,i) => {
              if(v) return <Seat name={v} key={i} view />
              else return <Seat hideSeatProp={true} name={v} key={i} view />
            }
          )}
        </div>      
      </div>
    </section>
  }

  return <section className="section-design">
    <FormController />
    <div className="container-seat-design">
      <div className="container-seat" style={{ gridTemplateColumns : `repeat(${columns},1fr)` }} >
        { seatTemplate.map((v,i) => <Seat edit={v.edit} name={v.name} id={i} key={i} />) }
      </div>      
    </div>
  </section>
}

export default TemplateDesign;