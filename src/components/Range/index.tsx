import React, { useState } from 'react'
import { InputElement$, RangeWrapper$, Label$ } from './styles'

interface RangePropsI {
  values: [number, number, number]
  initialValue?: number
  handleChange: (value: number) => void
  label?: string
  showValue?: boolean
}

const Range: React.FunctionComponent<RangePropsI & React.HTMLAttributes<HTMLInputElement>> = ({
  label, handleChange, showValue, initialValue, values
}) => {
  const [value, setValue] = useState(initialValue || values[0])

  const _handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value)
    setValue(value)
    handleChange(value)
  }

  return (
    <RangeWrapper$>
      {label && (
        <Label$>
          {label}
          {showValue && `: ${value}`}
        </Label$>
      )}
      <InputElement$
        value={value}
        onChange={_handleChange}
        type='range'
        min={values[0]}
        max={values[1]}
        step={values[2]}
      />
    </RangeWrapper$>
  )
}

export default Range
