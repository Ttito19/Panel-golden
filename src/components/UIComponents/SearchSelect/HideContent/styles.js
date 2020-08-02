import styled from "styled-components";
import { height } from "../_variables";

export const Content = styled.div`
  width: 100%;
  min-height: 80px;
  max-height: 200px;
  overflow: auto;
  position: absolute;
  top: calc(${height} + 5px);
  left: 0;
  background-color: #fff;
  border: 1px solid rgb(220,220,220);
  border-radius: 3px; 

  ${props => {
    if(!props.show){
      return `
        opacity: 0;
        visibility: hidden;
      `;
    }
  }}
`;