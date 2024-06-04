import React from 'react'
import './modal.scss'
import ModalState from '../../context/ModalContext'

const Modal = ({ children , onOpen}) => {

    return (
        <ModalState onOpen={onOpen}>
            {children}
        </ModalState>
    )
}

export default Modal