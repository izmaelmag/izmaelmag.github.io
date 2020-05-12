import React from 'react'
import Toggle from '.'
import Group, { GroupDivider$ } from 'components/Group'
import MoonIcon from 'images/svg/moon.svg'

const ToggleKit = () => (
  <Group title='Toggle'>
    <Toggle defaultValue={true} onChange={console.log} />
    <GroupDivider$ />
    <Toggle label='With label' onChange={console.log} />
    <GroupDivider$ />
    <Toggle label='With text' withText onChange={console.log} />
    <GroupDivider$ />
    <Toggle label='With icon' onChange={console.log}>
      <MoonIcon />
    </Toggle>
  </Group>
)

export default ToggleKit