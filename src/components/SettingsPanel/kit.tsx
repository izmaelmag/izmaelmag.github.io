import React from 'react'
import SettingsPanel from '.'
import Group from 'components/Group'
import sketchSettings from 'sketches/medusa/sketchSettings'

const ToggleKit = () => {

  return (
    <Group title='Page title'>
      <SettingsPanel
        settings={sketchSettings}
        onChange={console.log}
      />
    </Group>
  )
}

export default ToggleKit