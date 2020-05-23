declare type TSettingsValues = boolean | number

declare type TSettingsItemUpdate = (key: string, value: TSettingsValues) => void

declare type TSettingsObject = {
  [key: string]: TSettingsValues
}

declare interface ISettingsItem {
  title?: string
  type: 'toggle' | 'range'
  value: TSettingsValues
  props: {
    min?: number
    max?: number
    step?: number
    toggleState?: boolean
  }
}

declare interface ISettingsList {
  [key: string]: ISettingsItem
}