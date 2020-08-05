import React from 'react';
import { Icon, ToolTip } from './styles';

const IconToolTip = ({ size , message , icon }) => {
  return <Icon size={size}>
    {icon}
    <ToolTip>{message}</ToolTip>
  </Icon>
}

IconToolTip.defaultProps = {
  size : '20px'
}

export default IconToolTip;