import React, { useRef, useState } from "react";
import CustomSelect from "../CustomSelect";

const AcumulativeSelect = ({ data , onAddItem }) => {
  const [ selectedItem , setSelectedItem ] = useState({});
  const refDate = useRef(),
    refTime = useRef();

  const onChange = value => setSelectedItem(value);

  const onSubmit = ev => {
    if(!refDate.current.value || !refTime.current.value || !Object.keys(selectedItem).length) return;

    onAddItem({ 
      time : refTime.current.value, 
      date : refDate.current.value, 
      ...selectedItem 
    });

    refTime.current.value = "";
    refDate.current.value = "";
  }

  return <div>
    <CustomSelect font="bold" title="Paraderos" data={data} onChange={onChange} />
    <div className="row">
      <div className="col">
        <div className="form-group">
          <input ref={refDate} type="date" className="form-control" />
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <input ref={refTime} type="time" className="form-control" />
        </div> 
      </div>   
    </div>
    <button type="button" onClick={onSubmit} className="btn btn-sm btn-primary">Agregar Paradero</button>
  </div>
}

export default AcumulativeSelect;