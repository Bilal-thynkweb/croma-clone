import React from 'react'
import { createPortal } from 'react-dom'


const Modal = ({children, closeModal}) => {
    return createPortal(
        <>
        <div className='' onClick={closeModal}></div>
        <div className=''>{children}</div>
        </>,
        document.getElementById("modal")
       
      );
};
  


export default Modal