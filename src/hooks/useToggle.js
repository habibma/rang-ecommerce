import React, { useState } from 'react'

const useToggle = () => {

  const [on, setOn] = useState(false)

  const onToggle = () => {
    setOn(prevState => !prevState)
  }
  return [on, onToggle];
}

export default useToggle;