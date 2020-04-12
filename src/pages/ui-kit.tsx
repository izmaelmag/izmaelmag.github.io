import React, { useState } from 'react'
import styled from 'styled-components'
import CommonLayout from 'layouts/Common'
import Toggle from 'components/Toggle'
import { Colors, CSSProps, darkMedia } from 'constants/Styles'

const UiKit = () => {
  const [state, setState] = useState({})

  return (
    <CommonLayout>
      <Page$>
        <Component$>
          <ComponentName$>Toggle</ComponentName$>
          <Toggle onChange={console.log} />
        </Component$>
    
        <Component$>
          <ComponentName$>Toggle with label</ComponentName$>
          <Toggle label='Toggle label' onChange={console.log} />
        </Component$>
      </Page$>
    </CommonLayout>
  )
}

export default UiKit

const Page$ = styled.div`
  padding: 32px;
  min-height: 100vh;
  background: ${CSSProps.background};
`

const Component$ = styled.div`
  margin: 16px 0;
  padding: 16px;
  border: 1px solid ${Colors.Black(20)};
  border-radius: 6px;
  position: relative;

  @media (${darkMedia}) {
    border: 1px solid ${Colors.White(20)};
  }
`

const ComponentName$ = styled.div`
  position: absolute;
  top: -8px;
  left: 12px;
  background: ${CSSProps.background};
  color: ${CSSProps.text};
  padding: 0 4px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
`