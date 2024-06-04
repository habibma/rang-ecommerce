import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

const ModalContent = ({ children }) => {

    const { open, toggleOpen } = useContext(ModalContext)

    return (
        <>
            {open && <div className='modal'>
                <section className='modal-content'>
                    <span className="close" onClick={toggleOpen}>&times;</span>
                    {children}
                </section>
            </div>}
        </>
    )
}

export default ModalContent