import React, { memo } from "react";
import Item from "./Item";
import { ContainerList } from "./styles";

const ItemList = ({ data , onClickItem }) => {
  return <ContainerList>
    { data.map((v,i) => <Item key={i} index={i} data={v} onClick={onClickItem} />) }
  </ContainerList>
}

export default memo(ItemList);