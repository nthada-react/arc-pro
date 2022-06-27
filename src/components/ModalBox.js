import React from 'react';
import Modal from 'react-modal';
import Iframe from 'react-iframe'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'10px'
    },
  };

const ModalBox = (props) => {
  
    return (
        <div>
        <button onClick={props.openModal}>Open Modal</button>
        <Modal
          isOpen={props.modalIsOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
        >
          <div className='videoCaption flex justify-between items-center'>
            <h1>{props.singleNews.title}</h1>
            <button className='rounded-full border-2' onClick={props.closeModal}></button>
            </div>        
         
          <div className='hideIframe'>
          <Iframe url={props.singleNews.link}
        width="767px"
        height="715px"
        scrolling='no'
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
          </div>
        </Modal>
      </div>
      );

}

export default ModalBox;