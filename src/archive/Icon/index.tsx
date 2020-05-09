import React from 'react'
import MoonIcon from 'images/svg/moon.svg'

interface IconPropsI {
  name?: string
}

const Icon = ({ name }: IconPropsI) => {
  return (
    <div>
      <MoonIcon />
    </div>
  )
}

export default Icon