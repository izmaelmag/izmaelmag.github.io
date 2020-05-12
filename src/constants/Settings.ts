export enum SettingsTypes {
  toggle = 'toggle',
  range = 'range',
}

export interface SettingsParamsI {
  min?: number
  max?: number
  step?: number
  toggleState?: boolean
}

export interface SettingsItemI {
  keyName: string,
  type: SettingsTypes,
  defaultValue: boolean | number,
  props: SettingsParamsI,
  title?: string
}
