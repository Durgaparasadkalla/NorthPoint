import { Modal } from 'react-bootstrap'
import React from 'react'

const CustomModalComponent = ({ show, handleClose, title, children }) => {
  const styles = {
    modalheader: {
      backgroundColor: 'blue'
    },
    customModal:{
      '@media (max-width:576px)':{
        maxWidth:'80%'
      },
      '@media (min-width:577px) and (max-width:768px)':{
        maxwidth: '80%'
      },
      '@media (min-width:767px)':{
        maxWidth:'80%'
      }
    }
  }
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton className='bg-secondary-subtle' >
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}

export default CustomModalComponent