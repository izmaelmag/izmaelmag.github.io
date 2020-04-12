import React, { useState } from 'react'
import { ToggleWrapper$, Toggle$, Pin$, Label$ } from './styles'
import { ThemeProvider } from 'styled-components'

interface TogglePropsI {
  label?: string
  state?: boolean
  onChange: (state: boolean) => void
}

const Toggle = ({
  onChange,
  state = false, 
  label
}: TogglePropsI) => {
  const [isActive, setState] = useState(state)

  const handleClick = () => {
    setState(!isActive)
    onChange(!isActive)
  }

  return (
    <ThemeProvider theme={{ isActive }}>
      <ToggleWrapper$>
        { label && <Label$>{label}</Label$>}

        <Toggle$ onClick={handleClick}>
          <Pin$ />
        </Toggle$>
      </ToggleWrapper$>
    </ThemeProvider>
  )
}

export default Toggle
