import React, { useState } from 'react'
import { goo, blob, colored } from './css-goo.module.css'

const GooDemo1 = () => {
  const [isColored, toggleColored] = useState(0)

  const classNames = `${goo} ${isColored && colored}`

  return (
    <div className={classNames} onClick={() => toggleColored(!isColored)}>
      <div className={blob}></div>
      <div className={blob}></div>
      <div className={blob}></div>
      <div className={blob}></div>
      <div className={blob}></div>
    </div>
  )
}

export default GooDemo1