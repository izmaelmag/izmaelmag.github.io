import React from 'react'
import { SettingsItemI, SettingsTypes } from 'constants/Settings'
import { Layout$, SettingsItem$ } from './styles'
import RangeInput from 'components/RangeInput'
import Toggle from 'components/Toggle'

interface SettingsPanelPropsI {
  settings: SettingsItemI[],
  onChange: (state: object) => void
}

class SettingsPanel extends React.Component<SettingsPanelPropsI> {
  state = {

  }

  componentDidMount() {

  }

  updateSettingsKey = (key: string) => (value: number | boolean) => {
    this.setState({
      [key]: value
    }, () => {
      this.props.onChange(this.state)
    })
  }

  createRange = (item: SettingsItemI): React.ReactNode => {
    const { min, max, step } = item.props

    return (
      <SettingsItem$>
        <RangeInput
          defaultValue={Number(item.defaultValue)}
          label={item.title}
          values={[min, max, step]}
          handleChange={this.updateSettingsKey(item.keyName)}
          showValue
        />
      </SettingsItem$>
    )
  }

  createToggle = (item: SettingsItemI): React.ReactNode => {
    return (
      <SettingsItem$>
        <Toggle
          onChange={this.updateSettingsKey(item.keyName)}
          label={item.title}
          defaultValue={!!item.defaultValue}
        />
      </SettingsItem$>
    )
  }

  getSettingsComponents = () => {
    const settingsComponents: React.ReactNode[] = []

    this.props.settings.map(settingsItem => {
      switch(settingsItem.type) {
        case SettingsTypes.range:
          settingsComponents.push(this.createRange(settingsItem))
          break
          
        case SettingsTypes.toggle:
          settingsComponents.push(this.createToggle(settingsItem))
          break
      }
    })

    return settingsComponents
  }

  render() {
    const settingsComponents = this.getSettingsComponents()

    return(
      <Layout$>
        {settingsComponents}    
      </Layout$>
    )
  }
}

export default SettingsPanel