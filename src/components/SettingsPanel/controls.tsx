import React from 'react'
import RangeInput from 'components/RangeInput'
import Toggle from 'components/Toggle'
import { SettingsItem$ } from './styles'

const Controls = {
  range: (keyName: string, item: ISettingsItem, updateValue: TSettingsItemUpdate): React.ReactNode => {
    const { min, max, step } = item.props
  
    return (
      <SettingsItem$ key={keyName}>
        <RangeInput
          initialValue={Number(item.value)}
          label={item.title}
          values={[min, max, step]}
          handleChange={value => updateValue(keyName, value)}
          showValue
        />
      </SettingsItem$>
    )
  },

  toggle: (keyName: string, item: ISettingsItem, updateValue: TSettingsItemUpdate): React.ReactNode => {
    return (
      <SettingsItem$ key={keyName}>
        <Toggle
          onChange={value => updateValue(keyName, value)}
          label={item.title}
          defaultValue={Boolean(item.value)}
        />
      </SettingsItem$>
    )
  }
}

export default Controls