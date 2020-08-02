import React, { memo } from "react";
import Item from "./Item";
import { Content } from "./styles";

const HideContent = ({ show , data , onClickItem }) => {
  return <Content show={show}>
    { data.map((v,i) => 
        v ? <Item id={i} data={v} onClick={onClickItem} /> 
        : null 
    )}
  </Content>
}

export default memo(HideContent);