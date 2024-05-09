import React, { createContext, useState } from 'react'

export const ToggleContext = createContext(null);

const Toggle = ({ children }) => {

    const [on, setOn] = useState(false);

    const toggle = () => {
        setOn(prevState => !prevState)
    }

    const value = { on, toggle }

    return (
        <ToggleContext.Provider value={value}>
            {children}
        </ToggleContext.Provider>
    )
}


export default Toggle;