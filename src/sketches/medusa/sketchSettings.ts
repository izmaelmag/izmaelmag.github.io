import { ISettingsItem, TControls } from 'constants/types'

const sketchSettings: ISettingsItem[] = [
  {
    type: TControls.range,
    keyName: 'polygonsNumber',
    value: 50,
    props: {
      min: 1,
      max: 100,
      step: 1
    },
    title: 'Length'
  },
  {
    type: TControls.range,
    keyName: 'thickness',
    value: 2,
    props: {
      min: 1,
      max: 4,
      step: 0.5
    },
    title: 'Thickness'
  },
  {
    type: TControls.range,
    keyName: 'phaseOffset',
    value: 3,
    props: {
      min: 0,
      max: 50,
      step: 1
    },
    title: 'Phase offset'
  },
  {
    type: TControls.range,
    keyName: 'amplitude',
    value: 21,
    props: {
      min: 0,
      max: 60,
      step: 0.5
    },
    title: 'Amplitude'
  },
  {
    type: TControls.range,
    keyName: 'gap',
    value: 5,
    props: {
      min: 5,
      max: 30,
      step: 1
    },
    title: 'Gap'
  },
  {
    type: TControls.range,
    keyName: 'vertices',
    value: 8,
    props: {
      min: 1, 
      max: 20,
      step: 1
    },
    title: 'Vertices'
  },
  {
    type: TControls.range,
    keyName: 'frequency',
    value: 1,
    props: {
      min: 0, 
      max: 10,
      step: 0.1
    },
    title: 'Frequency'
  },
  {
    type: TControls.range,
    keyName: 'speed',
    value: 1,
    props: {
      min: 0.05, 
      max: 2,
      step: 0.05
    },
    title: 'Speed'
  },
  {
    type: TControls.toggle,
    keyName: 'showLines',
    value: false,
    props: {},
    title: 'Show lines'
  },
  {
    type: TControls.toggle,
    keyName: 'showPolygons',
    value: false,
    props: {},
    title: 'Show polygons'
  }
]

export default sketchSettings