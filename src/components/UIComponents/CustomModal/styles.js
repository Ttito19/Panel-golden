import styled , { css } from 'styled-components';
import { Flex } from '../../../styles';

const Modal = styled.div`
  width: ${p => p.horizontalSize || '350px'};
  height: ${p => p.verticalSize || '450px'};
  background-color: #fff;
  border-radius: ${p => p.borderRadius || '5px'};
  position: relative;
  transition: .3s;
  top: 0;
`;

const IconClose = styled.span`
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.8em;
  color: #fff;
  cursor: pointer;
`;

const DarkScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  left: 0;
  transition: .3s;
  
  ${Flex()}

  ${p => {
    if(!p.isShow) {
      return css`
        & , ${Modal} {
          opacity: 0;
          visibility: hidden;
        }

        ${Modal} {
          top: -30px;
        }
      `;
    }
  }}
`;

export {
  DarkScreen,
  Modal,
  IconClose
}