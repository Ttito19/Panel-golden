import React from "react";
import "./index.scss";

//Components
import FormController from "./FormController";
import SeatDesignController from "./SeatDesignController";

const TemplateDesign = props => {
  const { view , update } = props;
  
  if(view){
    return <section className="section-design view-design">
      <SeatDesignController view={true} />
    </section>
  }

  return <section className="section-design">
    <FormController update={update} />
    <SeatDesignController update={update} />
  </section>
}

export default TemplateDesign;