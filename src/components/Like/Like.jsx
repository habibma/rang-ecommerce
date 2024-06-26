import React from 'react'
import './like.css'
import useToggle from '../../hooks/useToggle'

const Like = ({ status, onChange }) => {

    const [on, onToggle] = useToggle({
        intitialValue: status,
        onToggle: onChange
    })

    return (
        <div onClick={onToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={status ? "red" : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={status ? "red" : '#2F4F4F'} className="like">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </div>



    )
}

export default Like