import React from "react";
import "./index.scss";

//Components
import FormController from "./FormController";
import SeatDesignController from "./SeatDesignController";

const TemplateDesign = props => {
  const { view } = props;
  
  if(view){
    return <section className="section-design view-design">
      <SeatDesignController view={true} />
    </section>
  }

  return <section className="section-design">
    <FormController />
    <SeatDesignController />
  </section>
}

export default TemplateDesign;