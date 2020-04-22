interface KeysToArrayParametersI {
  object: {[name: string]: string}
  keyName: string
  valueName: string
}

const keysToArray = ({ object, keyName, valueName }: KeysToArrayParametersI): {}[] => {
  let array = []

  for (let key in object) {
    array.push({
      [keyName]: key,
      [valueName]: object[key]
    })
  }

  return array
}

export default keysToArray