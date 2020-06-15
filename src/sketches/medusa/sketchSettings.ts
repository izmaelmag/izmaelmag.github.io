const sketchSettings: ISettingsList = {
  polygonsNumber: {
    type: 'range',
    value: 100,
    props: {
      min: 1,
      max: 100,
      step: 1
    },
    title: 'Length'
  },

  thickness: {
    type: 'range',
    value: 2,
    props: {
      min: 1,
      max: 4,
      step: 1
    },
    title: 'Thickness'
  },

  phaseOffset: {
    type: 'range',
    value: 10,
    props: {
      min: 0,
      max: 50,
      step: 1
    },
    title: 'Phase offset'
  },

  amplitude: {
    type: 'range',
    value: 0,
    props: {
      min: 0,
      max: 180,
      step: 1
    },
    title: 'Amplitude'
  },

  gap: {
    type: 'range',
    value: 3,
    props: {
      min: 1,
      max: 10,
      step: 1
    },
    title: 'Gap'
  },

  vertices: {
    type: 'range',
    value: 8,
    props: {
      min: 1, 
      max: 20,
      step: 1
    },
    title: 'Vertices'
  },

  frequency: {
    type: 'range',
    value: 15.5,
    props: {
      min: 0, 
      max: 60,
      step: 0.5
    },
    title: 'Frequency'
  },

  speed: {
    type: 'range',
    value: 1.7,
    props: {
      min: 0, 
      max: 2,
      step: 0.1
    },
    title: 'Speed'
  },

  showLines: {
    type: 'toggle',
    value: false,
    props: {},
    title: 'Show lines'
  },

  showPolygons: {
    type: 'toggle',
    value: false,
    props: {},
    title: 'Show polygons'
  }
}

export default sketchSettings