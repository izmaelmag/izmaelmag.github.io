export enum TControls {
  toggle = 'toggle',
  range = 'range',
}

export type TAvailableSettingsValue = boolean | number

export type TSettingsObject = {
  [key: string]: TAvailableSettingsValue
}

export interface ISettingsParams {
  min?: number
  max?: number
  step?: number
  toggleState?: boolean
}

export interface ISettingsItem {
  keyName: string,
  title?: string
  type: TControls,
  value: TAvailableSettingsValue,
  props: ISettingsParams,
}
