import React, { useState } from 'react'
import { $Toggle } from './styles'

interface TogglePropsI {
  initialState?: boolean
  onChange: (state: boolean) => void
}

const Toggle = ({
  onChange,
  initialState = false
}: TogglePropsI) => {
  const [state, setState] = useState(initialState)

  const handleClick = () => {
    setState(!state)
    onChange(!state)
  }

  return (
    <$Toggle onClick={handleClick}>
      <input type="checkbox" defaultChecked={state} />
    </$Toggle>
  )
}

export default Toggle
