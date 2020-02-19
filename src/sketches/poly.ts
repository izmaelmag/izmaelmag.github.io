import p5 from "p5"
import { Ren, Rey } from 'constants/ColorSchemes'
import polypoints from 'utils/geometry/polypoints'

export const sketch1 = (customSettings?: object) => (p: p5) => {
  const Th = {
    main: p.color(Rey.main),
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
    x: settings.size / 2,
    y: settings.size / 2
  }

  p.setup = () => {
    p.createCanvas(settings.size, settings.size)
    p.noStroke()
  }
  
  p.draw = () => {
    p.clear()
    p.background(Th.main)
    for (let i = settings.polygonsNumber; i > 0; i--) {
      p.fill(i % 2 ? Th.accent : Th.secondary)
      p.beginShape()
      polypoints({
        v: settings.vertices,
        c: Center,
        r: (i+1) * settings.gap + 10 * Math.sin(dt/50 + i * 0.2),
        a: p.radians((20 - i) * Math.sin(dt/25 + i * 0.2))
      }).map(({ x, y }) => {
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
    p.createCanvas(settings.size, settings.size)
    p.noFill()
  }
  
  p.draw = () => {
    p.clear()
    p.background(Th.main)
    for (let i = settings.polygonsNumber; i > 0; i--) {
      p.stroke(Th.accent)
      p.beginShape()
      polypoints({
        v: settings.vertices,
        c: Center,
        r: (i+1) * settings.gap + 20 * Math.sin(dt/50 + i * 0.2),
        a: p.radians((settings.amplitude + i) * Math.sin(dt/25 + i * 0.2))
      }).map(({ x, y }) => {
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
    p.createCanvas(settings.size, settings.size, p.WEBGL)
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
      polypoints({
        v: settings.vertices,
        c: {
          x: settings.amplitude * Math.sin(dt/20 + i * 0.1),
          y: settings.amplitude * Math.cos(dt/20 + i * 0.1)
        },
        r: (i+1) * settings.gap,
        a: p.radians((settings.amplitude - i) * Math.sin(dt/25 + i * 0.2))
      }).map(({ x, y }) => {
        p.vertex(x, y, i*-10)
      })
      p.endShape(p.CLOSE)
    }

    dt += 1
  }
}

export const sketch4 = (customSettings?: object) => (p: p5) => {
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
    p.createCanvas(settings.size, settings.size)
    p.noStroke()
  }
  
  p.draw = () => {
    p.clear()
    p.background(Th.main)
    for (let i = settings.polygonsNumber; i > 0; i--) {
      p.fill(Th.accent)
      polypoints({
        v: settings.vertices,
        c: Center,
        r: (i+1) * settings.gap + 20 * Math.sin(dt/50 + i * 0.2),
        a: p.radians((settings.amplitude + i) * Math.sin(dt/25 + i * 0.2))
      }).map(({ x, y }) => {
        p.circle(x, y, 5 - i/4)
      })
      p.fill(Th.secondary)
      polypoints({
        v: settings.vertices,
        c: Center,
        r: 10 + (i+1) * settings.gap + 20 * Math.sin(dt/50 + i * 0.2),
        a: p.PI / settings.vertices + p.radians((settings.amplitude + i) * Math.sin(dt/25 + i * 0.2))
      }).map(({ x, y }) => {
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