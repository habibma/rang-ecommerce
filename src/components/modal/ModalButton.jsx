import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

const ModalButton = ({ children }) => {

    const { toggleOpen } = useContext(ModalContext)

    return (
        <div>{children(toggleOpen)}</div>
    )
}

export default ModalButton