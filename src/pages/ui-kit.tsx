import React, { useState } from 'react'
import styled from 'styled-components'
import CommonLayout from 'layouts/Common'
import Toggle from 'components/Toggle'
import { Colors } from 'constants/Styles'
import Group, { GroupDivider$ } from 'components/Group'
import MoonIcon from 'images/svg/moon.svg'

const UiKit = () => {
  return (
    <CommonLayout>
      <Page$>
        <Group title='Toggle'>
          <Toggle onChange={console.log} />
          <GroupDivider$ />
          <Toggle label='With label' onChange={console.log} />
          <GroupDivider$ />
          <Toggle label='With text' withText onChange={console.log} />
          <GroupDivider$ />
          <Toggle label='With icon' onChange={console.log}>
            <MoonIcon />
          </Toggle>
        </Group>
      </Page$>
    </CommonLayout>
  )
}

export default UiKit

const Page$ = styled.div`
  padding: 32px;
  min-height: 100vh;
  background: ${Colors.CSS.bg};
  max-width: 520px;
`