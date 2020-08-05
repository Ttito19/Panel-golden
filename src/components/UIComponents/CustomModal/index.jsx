import React from 'react';
import { FaTimes } from 'react-icons/fa'
import { DarkScreen, Modal , IconClose } from './styles';

/**
 * hide -> funcion para cerrar el modal
 * styles -> objeto de propiedades custom
 * {
 *    horizontalSize : Tamaño horizontal (px)
 *    verticalSize : Tamaño vertical (px)
 *    borderRadius : Borde del radio (px)
 * }
 */

const CustomModal = ({ children , isShow , styles , hide }) => {
  return <DarkScreen isShow={isShow}>
    <Modal {...styles} >
      {children}
    </Modal>
    <IconClose onClick={hide}>
      <FaTimes />
    </IconClose>
  </DarkScreen>
}

export default CustomModal;