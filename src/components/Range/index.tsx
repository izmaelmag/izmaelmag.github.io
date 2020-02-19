import React from 'react'
import styled from 'styled-components'

interface RangePropsI {
  min: number
  max: number
  step: number

  title?: string
}

const Range: React.StatelessComponent<RangePropsI & React.HTMLAttributes<HTMLInputElement>> = ({ title, ...rest }) => {
  return (
    <div>
      {title && <span>{title}</span>}
      <input type='range' {...rest} />
    </div>
  )
}

export default Range
