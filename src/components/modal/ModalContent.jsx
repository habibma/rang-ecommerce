import React, { useContext, useEffect } from 'react'
import { ModalContext } from '../../context/ModalContext'

const ModalContent = ({ children }) => {

    const { open, toggleOpen } = useContext(ModalContext)



    useEffect(() => {
        const modal = document.getElementById("modal");

        const close = function (event) {
            if (event.target == modal) {
                toggleOpen()
            }
        }

        window.addEventListener('click', close)

        return () => window.removeEventListener('click', close)
    }, [open])

    return (
        <>
            {open && <div id='modal' className='modal'>
                <section className='modal-content'>
                    <span className="close" onClick={toggleOpen}>&times;</span>
                    {children}
                </section>
            </div>}
        </>
    )
}

export default ModalContent