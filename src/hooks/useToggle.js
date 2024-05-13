import React, { useEffect, useRef, useState } from 'react'

const useToggle = ({ intitialValue = false, onToggle = () => { } }) => {

  const [on, setOn] = useState(intitialValue)
  const firstRender = useRef(true) // To prevent callback running in first render

  const toggle = () => {
    setOn(prevState => !prevState)
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
    } else {
      onToggle();
    }
  }, [on])

  return [on, toggle];
}

export default useToggle;