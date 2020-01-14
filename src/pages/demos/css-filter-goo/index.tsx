import React, { useState } from 'react'

import styled from 'styled-components'

export const Layout$ = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Cell$ = styled.div`
  width: 480px;
  height: 480px;
`

export const Navigation$ = styled.nav`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

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