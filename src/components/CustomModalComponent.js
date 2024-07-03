import { Modal } from 'react-bootstrap'
import React from 'react'

const CustomModalComponent = ({ show, handleClose, title, children }) => {
  return (
    <Modal show={show} onHide={handleClose} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}

export default CustomModalComponent