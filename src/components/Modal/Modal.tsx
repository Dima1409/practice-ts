import React from 'react';

interface ModalProps {
  children: React.ReactNode,
  title: string,
  onClose: ()=>void
}

const Modal = ({children, title, onClose}: ModalProps) => {
  return (
    <>
      <div
        onClick={()=>onClose()}
        style={{
          position: "fixed",
          zIndex: 4,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          backgroundColor: "goldenrod",
          opacity: 0.4,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          zIndex: 5,
          backgroundColor: 'white',
          width: '300px',
          height: "250px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2>{title}</h2>
        {children}
        <button style={{backgroundColor:'palevioletred'}} onClick={onClose}>close</button>
      </div>
      
    </>
  );
};

export default Modal;
