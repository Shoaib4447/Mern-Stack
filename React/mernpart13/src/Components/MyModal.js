import { React, useEffect, useState } from 'react';
import { Modal, Button, ModalHeader, ModalTitle, ModalBody, ModalFooter} from 'react-bootstrap';
import  ReactDOM  from 'react-dom';

const MyModal = (props) => {
    // Initial value of showModal is true
  const [showModal,setShowModal] = useState(true);
  // Managing the value of showModal
  const closeModal = ()=>{
    setShowModal(false);
  }
//   Adding or Removing class
  useEffect(()=>{
    if(showModal){
      document.body.classList.add('modal-open');
    }else{
      document.body.classList.remove('modal-open');
    }
  },[showModal])

// Managing time interval of the Modal
  useEffect(()=>{
    const timeout = setTimeout(()=>{
        closeModal();
    },3000)
    return()=>clearTimeout(timeout)
  },[])

  return ReactDOM.createPortal (
        <Modal show={showModal} onHide={closeModal}>
            <ModalHeader closeButton>
                <ModalTitle>{props.title}</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <p>{props.content}</p>
            </ModalBody>
            <ModalFooter>
                <Button className='btn btn-primary' onClick={closeModal}>{props.button}</Button>
            </ModalFooter>
        </Modal>,
        document.querySelector('#myPortal')
  )
}

export default MyModal;
