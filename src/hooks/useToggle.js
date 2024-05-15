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

  useEffectOnUpdate(onToggle, [on])

  return [on, toggle, toggleOff];
}

export default useToggle;