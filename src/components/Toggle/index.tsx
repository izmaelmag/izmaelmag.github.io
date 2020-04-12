import React, { useState } from 'react'
import { ToggleWrapper$, Toggle$, Pin$, Icon$, Label$ } from './styles'
import { ThemeProvider } from 'styled-components'

interface TogglePropsI {
  label?: string
  state?: boolean
  icon?: Element
  withText?: boolean
  onChange: (state: boolean) => void
}

const Toggle: React.FunctionComponent<TogglePropsI> = ({
  onChange,
  withText,
  state,
  label,
  children
}) => {
  const [isActive, setState] = useState(state)

  const handleClick = () => {
    setState(!isActive)
    onChange(!isActive)
  }

  return (
    <ThemeProvider theme={{ isActive, withText }}>
      <ToggleWrapper$>
        { label && <Label$>{label}</Label$>}

        <Toggle$ onClick={handleClick}>
          <Pin$>
            {withText && (
              <span>{isActive ? 'On' : 'Off'}</span>
            )}

            <Icon$>{children}</Icon$>
          </Pin$>
        </Toggle$>
      </ToggleWrapper$>
    </ThemeProvider>
  )
}

export default Toggle
