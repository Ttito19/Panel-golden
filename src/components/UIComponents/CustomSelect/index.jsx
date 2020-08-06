import React from "react";
import Select from "react-select";

const CustomSelect = ({ title , font, data , multi , onChange , placeholder , defaultValue }) => {
  return <div className="form-group">
    <label className={`font-weight-${font}`}>{title}</label>
    <Select 
      options={data} 
      isMulti={multi} 
      isLoading={!data.length} 
      isDisabled={!data.length}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  </div>
}

CustomSelect.defaultProps = {
  multi : false,
  font : "",
  placeholder : 'Busca...'
}

export default CustomSelect;