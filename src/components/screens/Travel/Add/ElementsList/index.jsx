import React from "react";
import styled from "styled-components";

const ContainerList = styled.div`
  width : 100%;
  height : 150px;
  overflow : auto;
`;

const ElementsList = ({ title }) => {
  return <div className="pb-2">
    <div className="form-group">
      <label>{title}</label>
      <div class="input-group">
        <select class="custom-select" id="inputGroupSelect04">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
    </div>     
    <ContainerList>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">First item</li>
        <li class="list-group-item">Second item</li>
        <li class="list-group-item">Third item</li>
      </ul>
    </ContainerList>
  </div>
}

export default ElementsList;