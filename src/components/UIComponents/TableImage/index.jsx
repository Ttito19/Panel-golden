import styled from "styled-components";

const TableImage = styled.img`
  width: ${props => props.size};
  height : ${props => props.size};
  object-fit : ${props => props.objectFit || "cover"};
  ${props => {
    if(props.rounded) return "border-radius : 50%";
    return "";
  }}
`;

export default TableImage;