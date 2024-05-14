import { useState } from 'react'
import useEffectOnUpdate from './useEffectOnUpdate'

const useToggle = ({ intitialValue = false, onToggle = () => { } }) => {

  const [on, setOn] = useState(intitialValue)

  const toggle = () => {
    setOn(prevState => !prevState)
  }

  useEffectOnUpdate(onToggle, [on])

  return [on, toggle];
}

export default useToggle;