import React from 'react'
import Toggle from '../../context/Toggle'
import './like.css'

const Like = ({ onChange }) => {
    return (
        <Toggle onToggle={onChange}>
            <Toggle.Button>
                <Toggle.Display>
                    {on => {
                        return (
                            <svg xmlns="http://www.w3.org/2000/svg" fill={on ? "red" : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={on ? "red" : '#eee'} className="like">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        )
                    }
                    }
                </Toggle.Display>
            </Toggle.Button>
        </Toggle>
        // <Toggle.On>
        //     <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="like">
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        //     </svg>
        // </Toggle.On>
        // <Toggle.Off>
        //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="like">
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        //     </svg>
        // </Toggle.Off>
    )
}

export default Like