import React from "react";
import { ItemDiv } from "./styles";

const Item = ({ id, data, onClick }) => {
  const onClickItem = () => onClick({ id , ...data });

  return <ItemDiv onClick={onClickItem}>
    <span>{data.label}</span>
  </ItemDiv>
}

Item.defaultProps = {
  onClick : () => false
}

export default Item;