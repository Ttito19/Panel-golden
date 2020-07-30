import React from "react";
import ElementsList from "../ElementsList";

const CustomListBusStop = ({ onChange , data , title }) => {
  return <div>
    <ElementsList 
      options={data}
      title={title}
      onChange={onChange}
      isMulti={false}
    />
    <div>
      <input type="date" />
    </div>
  </div>
}

export default CustomListBusStop;