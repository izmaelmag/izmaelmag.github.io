import { ISettingsItem, TSettingsObject } from "constants/types";

function toObject(settingsDeclaration: ISettingsItem[]): TSettingsObject {
  return settingsDeclaration.reduce((result, item) => {
    result[item.keyName] = item.value
    return result
  }, {})
}

const settingsTransformer = {
  toObject
}

export default settingsTransformer