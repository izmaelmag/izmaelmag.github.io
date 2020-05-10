import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { InputElement$, RangeWrapper$, Label$, ValueNumber$, Limits$ } from './styles'

export interface RangePropsI {
  values: [number, number, number]
  initialValue?: number
  handleChange: (value: number) => void
  label?: string
  showValue?: boolean
  showLimits?: boolean
}

const RangeInput: React.FunctionComponent<RangePropsI & React.HTMLAttributes<HTMLInputElement>> = ({
  label, handleChange, showValue, showLimits, initialValue, values
}) => {
  const [value, setValue] = useState(initialValue || values[0])

  const _handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value)
    setValue(value)
    handleChange(value)
  }

  const rangeDiff = values[1]-values[0]
  const startValue = value - values[0]
  const thumbOffset = startValue*100/rangeDiff/100

  const theme = {
    showLimits,
    showValue,
    thumbOffset: thumbOffset.toFixed(2),
    isWide: value >= 1000,
  }

  return (
    <ThemeProvider theme={theme}>
      <RangeWrapper$>
        {label && <Label$>{label}</Label$>}

        {showLimits && (
          <Limits$>
            <div>{values[0]}</div>  
            <div>{values[1]}</div>  
          </Limits$>
        )}
        
        <InputElement$
          value={value}
          onChange={_handleChange}
          type='range'
          min={values[0]}
          max={values[1]}
          step={values[2]}
        />

        {showValue && <ValueNumber$>{value}</ValueNumber$>}
      </RangeWrapper$>
    </ThemeProvider>
  )
}

export default RangeInput
