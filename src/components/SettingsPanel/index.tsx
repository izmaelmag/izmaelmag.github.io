import React from 'react'
import { ISettingsItem, TControls } from 'constants/Types'
import RangeInput from 'components/RangeInput'
import Toggle from 'components/Toggle'
import {
  Layout$,
  SettingsItem$,
  SettingsControls$,
  SettingsHeader$
} from './styles'
import { ThemeProvider } from 'styled-components'

interface SettingsPanelPropsI {
  settings: ISettingsItem[],
  onChange: (state: object) => void
}

class SettingsPanel extends React.Component<SettingsPanelPropsI> {
  state = {
    showControls: true
  }

  componentDidMount() {
    const state = {}

    this.props.settings.map(({ keyName, value }) => {
      state[keyName] = value
    })

    this.setState(state, () => this.props.onChange(this.state))
  }

  updateSettingsKey = (key: string) => (value: number | boolean) => {
    this.setState({
      [key]: value
    }, () => this.props.onChange(this.state))
  }

  createRange = (item: ISettingsItem): React.ReactNode => {
    const { min, max, step } = item.props

    return (
      <SettingsItem$ key={item.keyName}>
        <RangeInput
          initialValue={Number(item.value)}
          label={item.title}
          values={[min, max, step]}
          handleChange={this.updateSettingsKey(item.keyName)}
          showValue
        />
      </SettingsItem$>
    )
  }

  createToggle = (item: ISettingsItem): React.ReactNode => {
    return (
      <SettingsItem$ key={item.keyName}>
        <Toggle
          onChange={this.updateSettingsKey(item.keyName)}
          label={item.title}
          defaultValue={!!item.value}
        />
      </SettingsItem$>
    )
  }

  getSettingsComponents = () => {
    const settingsComponents: React.ReactNode[] = []

    this.props.settings.map(settingsItem => {
      switch(settingsItem.type) {
        case TControls.range:
          settingsComponents.push(this.createRange(settingsItem))
          break
          
        case TControls.toggle:
          settingsComponents.push(this.createToggle(settingsItem))
          break
      }
    })

    return settingsComponents
  }

  toggleControls = () => {
    this.setState({
      showControls: !this.state.showControls
    })
  }

  render() {
    const settingsComponents = this.getSettingsComponents()
    const { showControls } = this.state

    return(
      <ThemeProvider theme={{ showControls }}>
        <Layout$>
          <SettingsHeader$ onClick={this.toggleControls}>
            <span>Settings</span>
            <span>{showControls ? '–' : '+'}</span>
          </SettingsHeader$>

          <SettingsControls$>
            {settingsComponents}    
          </SettingsControls$>
        </Layout$>
      </ThemeProvider>
    )
  }
}

export default SettingsPanel