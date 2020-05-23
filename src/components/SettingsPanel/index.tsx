import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import settingsTransformer from 'utils/settingsTransformer'
import Controls from './controls'
import {
  Layout$,
  SettingsControls$,
  SettingsHeader$
} from './styles'

interface SettingsPanelPropsI {
  settings: ISettingsList,
  onChange: (state: object) => void
}

const SettingsPanel: React.FunctionComponent<SettingsPanelPropsI> = (props) => {
  const [showControls, setShowControls] = useState(true)
  const [settings, setSettings] = useState(props.settings)

  const updateSettingsItemValue = (key: string, value: TSettingsValues) => {
    const updatedItem = {
      ...settings[key],
      value
    }

    setSettings({ ...settings, [key]: updatedItem })
  }

  useEffect(() => {
    props.onChange(settingsTransformer.toObject(settings))
  }, [settings])

  return (
    <ThemeProvider theme={{ showControls }}>
      <Layout$>
        <SettingsHeader$ onClick={() => setShowControls(!showControls)}>
          <span>Settings</span>
          <span>{showControls ? '–' : '+'}</span>
        </SettingsHeader$>

        <SettingsControls$>
          {Object.keys(settings).map(key => {
            const item = settings[key]

            return Controls[item.type](key, item, updateSettingsItemValue) || null
          })}    
        </SettingsControls$>
      </Layout$>
    </ThemeProvider>
  )
}

export default SettingsPanel