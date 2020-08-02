import React from "react";
import styled from "styled-components";
import useClickOutModal from "./hooks/useClickOutModal";

const DarkScreen = styled.div`
  width: 100%;
  height : 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,${props => props.opacity || 0.5});
  display: flex;
  justify-content : center;
  transition: .3s;

  ${props => {
    if(!props.show){
      return `
        opacity : 0;
        visibility : hidden;
      `;
    }
  }}

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Modal = styled.div`
  width: ${props => props.horizontalSize};
  height : ${props => props.verticalSize};
  background: #fff;
  margin-top: 2em;
  position: relative;
  top: 0;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.5);
  transition-delay: .3s;
  transition: .3s;

  ${props => {
    if(!props.show){
      return `
        top: -30px;
      `;
    }
  }}
`;

const CustomModal = ({ children , show , hide , opacity , horizontalSize , verticalSize }) => {
  const { modalRef } = useClickOutModal(show,hide);

  return <DarkScreen show={show} opacity={opacity} >
    <Modal ref={modalRef} show={show} horizontalSize={horizontalSize} verticalSize={verticalSize} > 
      {children}
    </Modal>
  </DarkScreen>
}

CustomModal.defaultProps = {
  show : false,
  horizontalSize : "400px",
  verticalSize : "500px"
}

export default CustomModal;