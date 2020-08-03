import React from "react";
import { ItemDiv } from "./styles";

const Item = ({ index, data , onClick }) => {
  return <ItemDiv onClick={() => onClick(index,data)}>
    <span>{data.label}</span>
  </ItemDiv>
}

Item.defaultProps = {
  onClick : () => false
}

export default Item;