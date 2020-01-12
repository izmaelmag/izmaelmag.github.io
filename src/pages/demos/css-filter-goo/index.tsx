import React, { useState } from 'react'
import { layout, cell, navigation } from './styles.module.css'

import GooDemo1 from '../../../components/demos/css-goo/demo1/index'
import GooDemo2 from '../../../components/demos/css-goo/demo2/index'


const CssGoo = () => {
  const [currentDemo, setCurrentDemo] = useState(0)
  
  const Demos = [
    <GooDemo1 />,
    <GooDemo2 />
  ]

  const nextDemo = () => {
    if (currentDemo) setCurrentDemo(currentDemo - 1)
  }

  const previousDemo = () => {
    if (currentDemo < Demos.length) setCurrentDemo(currentDemo + 1)
  }
  
  return (
    <div className={layout}>
      <div className={cell}>
        {Demos[currentDemo]}
      </div>
      
      <nav className={navigation}>
        <button disabled={!currentDemo} onClick={nextDemo}>Previous</button>
        <button disabled={currentDemo === Demos.length - 1} onClick={previousDemo}>Next</button>
      </nav>
    </div>
  )
}

export default CssGoo