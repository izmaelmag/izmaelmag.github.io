function toObject<Type>(settingsList: ISettingsList): Type | {} {
  return Object.keys(settingsList).reduce((accSettings, key) => {
    return {
      ...accSettings,
      [key]: settingsList[key].value
    }
  }, {})
}

const settingsTransformer = {
  toObject
}

export default settingsTransformer