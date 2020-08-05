import styled from 'styled-components';

const ToolTip = styled.span`
  width: 100px;
  position: absolute;
  top: -30px;
  left: -50px;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  padding: 5px 10px;
  line-height: normal;
  font-size: 10px;
  transition: .3s;
  cursor: initial;
  text-align: center;
  opacity: 0;
  visibility: hidden;
`;

const Icon = styled.span`
  font-size: ${p => p.size};
  line-height: 0;
  padding-right: 5px;
  position: relative;
  display: block;
  cursor: pointer;

  &:hover ${ToolTip} {
    opacity: 1;
    visibility: visible;
    left: -40px;
  }
`;

export {
  Icon,
  ToolTip
}