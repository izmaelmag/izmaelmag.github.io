import React, { useState } from 'react'
import { goo, blob, colored } from './styles.module.css'

const GooDemo1 = () => {
  const [isColored, toggleColored] = useState(false)
  const classNames = `${goo} ${isColored && colored}`

  const toggleColor = () => toggleColored(!isColored)
  const hadleClick = () => toggleColor()
  const hadleKeyPress = event => {
    console.log(event)
  }

  return (
    <button
      className={classNames}
      onClick={hadleClick}
      onKeyPress={hadleKeyPress}
    >
      <div className={blob}></div>
      <div className={blob}></div>
      <div className={blob}></div>
      <div className={blob}></div>
    </button>
  )
}

export default GooDemo1