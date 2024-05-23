import { useState } from 'react'
import useEffectOnUpdate from './useEffectOnUpdate'

const useToggle = ({ intitialValue = false, onToggle = () => { } }) => {

  const [on, setOn] = useState(intitialValue)

  const toggle = () => {
    setOn(prevState => !prevState)
  }

  const toggleOff = () => {
    setOn(false)
  }

  useEffectOnUpdate(onToggle, [on]) // to Prevent to get executed in first render

  return [on, toggle, toggleOff];
}

export default useToggle;