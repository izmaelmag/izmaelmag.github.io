const sketchSettings: ISettingsList = {
  polygonsNumber: {
    type: 'range',
    value: 5,
    props: {
      min: 1,
      max: 15,
      step: 1
    },
    title: 'Lines'
  }
}

export default sketchSettings