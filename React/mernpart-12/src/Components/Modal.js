import React from 'react';

const BUTTON_WRAPPER_STYLE = {
    position : 'relative',
    zIndex : 1
}
const OTHER_CONTENT_STYLE = {
    position : 'relative',
    zIndex : 2,
    backgroundColor:'red',
    padding:'10px',
}
const Modal = () => {
  return (
    <>
        <div style={BUTTON_WRAPPER_STYLE}>
            <button>Open Modal</button>
        </div> 
        <div style={OTHER_CONTENT_STYLE}>Other Content</div>
    </>
  )
}

export default Modal;
