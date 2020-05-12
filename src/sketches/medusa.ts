import p5 from "p5"
import { Ren } from 'constants/ColorSchemes'
import polypoints from 'utils/geometry/polypoints'
import { SettingsItemI, SettingsTypes } from 'constants/Settings'
import { Colors } from "constants/Styles"

export const sketchSettings: SettingsItemI[] = [
  {
    type: SettingsTypes.range,
    keyName: 'polygonsNumber',
    defaultValue: 30,
    props: {
      min: 1,
      max: 60,
      step: 1
    },
    title: 'Length'
  },
  {
    type: SettingsTypes.range,
    keyName: 'pointRadius',
    defaultValue: 1,
    props: {
      min: 1,
      max: 4,
      step: 0.5
    },
    title: 'Point radius'
  },
  {
    type: SettingsTypes.range,
    keyName: 'gravity',
    defaultValue: 50,
    props: {
      min: 0,
      max: 200,
      step: 1
    },
    title: 'Gravity'
  },
  {
    type: SettingsTypes.range,
    keyName: 'amplitude',
    defaultValue: 4,
    props: {
      min: 0,
      max: 60,
      step: 1
    },
    title: 'Amplitude'
  },
  {
    type: SettingsTypes.range,
    keyName: 'vertices',
    defaultValue: 10,
    props: {
      min: 1, 
      max: 12,
      step: 1
    },
    title: 'Vertices'
  },
  {
    type: SettingsTypes.range,
    keyName: 'frequency',
    defaultValue: 2,
    props: {
      min: 0, 
      max: 30,
      step: 1
    },
    title: 'Frequency'
  },
  {
    type: SettingsTypes.range,
    keyName: 'speed',
    defaultValue: 0.5,
    props: {
      min: 0.05, 
      max: 2,
      step: 0.05
    },
    title: 'Speed'
  }
]

export const defaultSettings = {
  polygonsNumber: 15,
  vertices: 3,
  gravity: 10,
  amplitude: 10,
  pointRadius: 2,
  frequency: 1,
  speed: 0.1
}

const sketch = (settings = defaultSettings) => (p: p5) => {
  const Th = {
    main: p.color(Colors.Black(90)),
    accent: p.color(Ren.accent),
    secondary: p.color(Ren.secondary),
  }

  let dt = 0

  const Center = {
    x: p.windowWidth / 2,
    y: p.windowHeight / 2
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noStroke()
  }
  
  p.draw = () => {
    p.clear()
    p.background(Th.main)

    for (let i = settings.polygonsNumber; i > 0; i--) {
      p.fill(Th.accent)

      polypoints(
        settings.vertices,
        Center,
        (i+1) * 10 + settings.gravity * Math.sin(dt*settings.speed/50 + i * 0.2),
        p.radians((settings.amplitude + settings.frequency) * Math.sin(dt*settings.speed/100 + i * 0.2 * settings.frequency))
      ).map(({ x, y }) => {
        p.circle(x, y, settings.pointRadius)
      })
    }

    dt += 1
  }
}

export default sketch