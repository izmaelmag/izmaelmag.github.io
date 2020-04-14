import React from 'react'
import styled from 'styled-components'
import CommonLayout from 'layouts/Common'
import ToggleKit from 'components/Toggle/kit'
import { Colors } from 'constants/Styles'

const UiKit = () => {
  return (
    <CommonLayout>
      <Page$>
        <ToggleKit />
      </Page$> 
    </CommonLayout>
  )
}

export default UiKit

const Page$ = styled.div`
  padding: 32px;
  min-height: 100vh;
  background: ${Colors.CSS.bg};
`