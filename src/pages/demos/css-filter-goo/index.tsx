import React, { useState } from 'react'
import { Layout$, Cell$, Navigation$ } from './styles'

import GooDemo1 from 'components/demos/css-goo/demo1'
import GooDemo2 from 'components/demos/css-goo/demo2'



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
    <Layout$>
      <Cell$>
        {Demos[currentDemo]}
      </Cell$>
      
      <Navigation$>
        <button disabled={!currentDemo} onClick={nextDemo}>Previous</button>
        <button disabled={currentDemo === Demos.length - 1} onClick={previousDemo}>Next</button>
      </Navigation$>
    </Layout$>
  )
}

export default CssGoo