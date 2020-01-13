import React, { useState, ReactEventHandler } from 'react'
import { Goo$, Blob$, blobColors } from './styles'

const GooDemo1 = () => {
  const [isColored, toggleColored] = useState(false)

  const handleClick = () => toggleColored(!isColored)

  return (
    <Goo$ onClick={handleClick}>
      {blobColors.map(color => <Blob$ color={isColored && color} />)}
    </Goo$>
  )
}

export default GooDemo1