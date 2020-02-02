import React, { useState } from 'react'
import styled from 'styled-components'

import GooDemo1 from 'demos/css-goo/demo1'
import GooDemo2 from 'demos/css-goo/demo2'

const Demos = [<GooDemo1 />, <GooDemo2 />]
const CssGoo = () => {
  const [demo, setDemo] = useState(0)
  const isLastDemo = demo === Demos.length - 1
  
  return (
    <Layout$>
      <Cell$>
        {Demos[demo]}
      </Cell$>
      
      <Navigation$>
        <button disabled={!demo} onClick={() => setDemo(demo-1)}>Previous</button>
        <button disabled={isLastDemo} onClick={() => setDemo(demo+1)}>Next</button>
      </Navigation$>
    </Layout$>
  )
}

export default CssGoo

//region Styled
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
//endregion