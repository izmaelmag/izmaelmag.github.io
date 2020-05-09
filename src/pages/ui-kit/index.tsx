import React from 'react'
import styled from 'styled-components'
import CommonLayout from 'layouts/Common'
import ToggleKit from 'components/Toggle/kit'
import PageTitleKit from 'components/PageTitle/kit'
import { Colors } from 'constants/Styles'
import { GroupGrid$ } from 'components/Group'
import PageTitle from 'components/PageTitle'

const UiKit = () => {
  return (
    <CommonLayout>
      <Page$>
        <PageTitle title='UI KIT' />

        <GroupGridWithMargin$>
          <ToggleKit />
          <PageTitleKit />
        </GroupGridWithMargin$>
      </Page$> 
    </CommonLayout>
  )
}

export default UiKit

const Page$ = styled.div`
  padding: 16px;
  min-height: 100vh;
  background: ${Colors.CSS.bg};
`

const GroupGridWithMargin$ = styled(GroupGrid$)`
  margin-top: 32px;
`