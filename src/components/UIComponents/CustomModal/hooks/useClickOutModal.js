import { useEffect, useRef } from "react";

const useClickOutModal = (show,hide) => {
  const modalRef = useRef();

  useEffect(() => {
    if(show && modalRef.current){
      window.addEventListener('click', ev => {
        const { top , left, right , bottom }= modalRef.current.getBoundingClientRect();
        const clickX = ev.offsetX;
        const clickY = ev.offsetY;

        if(clickX < left || clickX > right){ hide(); return; }
        if(clickY < top || clickY > bottom){ hide(); return; }
      });
    }

    return () => {
      window.removeEventListener('click', ev => false);
    }
  },[show])

  return {
    modalRef
  }
}

export default useClickOutModal;