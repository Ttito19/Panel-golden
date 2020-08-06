import React from 'react';
import { FaTimes } from 'react-icons/fa'
import { DarkScreen, Modal , IconClose, TitleContainer, Title, ChildrenContainer } from './styles';

/**
 * title -> Titulo de la cabezera del modal
 * hide -> funcion para cerrar el modal
 * styles -> objeto para modificar el css
 * {
 *    horizontalSize : Tamaño horizontal (px)
 *    verticalSize : Tamaño vertical (px)
 *    borderRadius : Borde del radio (px)
 * }
 */

const CustomModal = ({ children , title , isShow , styles , hide }) => {
  return <DarkScreen isShow={isShow}>
    <Modal {...styles} >
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </Modal>
    <IconClose onClick={hide}>
      <FaTimes />
    </IconClose>
  </DarkScreen>
}

CustomModal.defaultProps = {
  title : 'Title Default',
  hide : () => null
}

export default CustomModal;