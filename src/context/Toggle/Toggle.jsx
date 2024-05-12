import React, { createContext, useEffect, useRef, useState } from 'react'

export const ToggleContext = createContext(null);

const Toggle = ({ children, onToggle = () => {}}) => {

    const [on, setOn] = useState(false);
    const firstRender = useRef(true)

    const toggle = () => {
        setOn(prevState => !prevState)
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            onToggle();
        }
    }, [on])

    const value = { on, toggle, setOn }

    return (
        <ToggleContext.Provider value={value}>
            {children}
        </ToggleContext.Provider>
    )
}


export default Toggle;