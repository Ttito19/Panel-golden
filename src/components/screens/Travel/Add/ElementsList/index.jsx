import React from "react";
import Select from "react-select";
import styled from "styled-components";

const ContainerList = styled.div`
  width : 100%;
  height : 150px;
  overflow : auto;
`;

const ElementsList = ({ title , options , onChange , isMulti }) => {
  return <div className="pb-2">
    <div className="form-group">
      <label>{title}</label>
      <Select 
        options={options}
        isMulti={isMulti}
        isDisabled={!options.length}
        onChange={onChange}
      />
    </div> 
  </div>
}

ElementsList.defaultProps = {
  options : [],
  onChange : ev => console.log(ev),
  isMulti : true
}

export default ElementsList;