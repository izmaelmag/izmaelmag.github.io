import p5 from "p5"
import { Ren, Rey } from 'constants/ColorSchemes'
import polypoints from 'utils/geometry/polypoints'
import { SettingsItemI, SettingsTypes } from 'constants/Settings'
import { Colors } from "constants/Styles"

export const sketchSettings: SettingsItemI[] = [
  {
    type: SettingsTypes.range,
    keyName: 'polygonsNumber',
    defaultValue: 5,
    props: {
      min: 1,
      max: 40,
      step: 1
    },
    title: 'Polygons count'
  },
  {
    type: SettingsTypes.range,
    keyName: 'vertices',
    defaultValue: 5,
    props: {
      min: 1, 
      max: 12,
      step: 1
    },
    title: 'Vertices'
  },
  {
    type: SettingsTypes.toggle,
    keyName: 'outline',
    defaultValue: false,
    props: {},
    title: 'Outline'
  },
]

export const sketch1 = (customSettings?: object) => (p: p5) => {
  const Th = {
    main: p.color(Colors.Black(90)),
    accent: p.color(Rey.accent),
    secondary: p.color(Rey.secondary),
  }

  const settings = {
    polygonsNumber: 25,
    vertices: 5,
    gap: 20,
    size: 512,
    ...customSettings
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
      p.fill(i % 2 ? Th.accent : Th.secondary)
      p.beginShape()
      polypoints(
        settings.vertices,
        Center,
        (i+1) * settings.gap + 10 * Math.sin(dt/50 + i * 0.2),
        p.radians((20 - i) * Math.sin(dt/25 + i * 0.2))
      ).map(({ x, y }) => {
        p.vertex(x, y)
      })
      p.endShape(p.CLOSE)
    }

    dt += 1
  }
}

export const sketch2 = (customSettings?: object) => (p: p5) => {
  const Th = {
    main: p.color(Ren.main),
    accent: p.color(Ren.accent),
    secondary: p.color(Ren.secondary),
  }

  const settings = {
    polygonsNumber: 15,
    vertices: 3,
    gap: 10,
    size: 512,
    amplitude: 10,
    ...customSettings
  }

  let dt = 0

  const Center = {
    x: settings.size / 2,
    y: settings.size / 2
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noFill()
  }
  
  p.draw = () => {
    p.clear()
    p.background(Th.main)
    for (let i = settings.polygonsNumber; i > 0; i--) {
      p.stroke(Th.accent)
      p.beginShape()
      polypoints(
        settings.vertices,
        Center,
        (i+1) * settings.gap + 20 * Math.sin(dt/50 + i * 0.2),
        p.radians((settings.amplitude + i) * Math.sin(dt/25 + i * 0.2))
      ).map(({ x, y }) => {
        p.vertex(x, y)
      })
      p.endShape(p.CLOSE)
    }

    dt += 1
  }
}

export const sketch3 = (customSettings?: object) => (p: p5) => {
  const Th = {
    main: p.color(Ren.main),
    accent: p.color(Ren.accent),
    secondary: p.color(Ren.secondary),
  }

  const settings = {
    polygonsNumber: 15,
    vertices: 3,
    gap: 10,
    size: 512,
    amplitude: 10,
    ...customSettings
  }

  let dt = 0

  const Center = {
    x: 0,
    y: 0
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
    p.noStroke()
  }
  
  p.draw = () => {
    p.clear()
    p.orbitControl()
    p.background(Th.main)
    for (let i = settings.polygonsNumber; i > 0; i--) {
      p.fill(i % 2 ? Th.accent : Th.main)
      p.beginShape()
      p.rotateX(p.radians(Math.sin(dt/20)))
      p.rotateY(p.radians(Math.cos(dt/20)))
      polypoints(
        settings.vertices,
        {
          x: settings.amplitude * Math.sin(dt/20 + i * 0.1),
          y: settings.amplitude * Math.cos(dt/20 + i * 0.1)
        },
        (i+1) * settings.gap,
        p.radians((settings.amplitude - i) * Math.sin(dt/25 + i * 0.2))
      ).map(({ x, y }) => {
        p.vertex(x, y, i*-10)
      })
      p.endShape(p.CLOSE)
    }

    dt += 1
  }
}

export const sketch4 = (customSettings?: object) => (p: p5) => {
  const Th = {
    main: p.color(Colors.Black(90)),
    accent: p.color(Ren.accent),
    secondary: p.color(Ren.secondary),
  }

  const settings = {
    polygonsNumber: 15,
    vertices: 3,
    gap: 10,
    size: 512,
    amplitude: 10,
    ...customSettings
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
        (i+1) * settings.gap + 20 * Math.sin(dt/50 + i * 0.2),
        p.radians((settings.amplitude + i) * Math.sin(dt/25 + i * 0.2))
      ).map(({ x, y }) => {
        p.circle(x, y, 5 - i/4)
      })
      p.fill(Th.secondary)
      polypoints(
        settings.vertices,
        Center,
        10 + (i+1) * settings.gap + 20 * Math.sin(dt/50 + i * 0.2),
        p.PI / settings.vertices + p.radians((settings.amplitude + i) * Math.sin(dt/25 + i * 0.2))
      ).map(({ x, y }) => {
        p.circle(x, y, 5 - i/4)
      })
    }

    dt += 1
  }
}


const sketches = [
  sketch1,
  sketch2,
  sketch3,
  sketch4
]

export default sketches