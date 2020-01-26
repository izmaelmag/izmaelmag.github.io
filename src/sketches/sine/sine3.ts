import p5 from "p5"
import { ColorSchemeT, Ren, Rey } from 'constants/ColorSchemes'
import polypoints from 'utils/geometry/polypoints'
import oscillate from "utils/geometry/oscillate"

const sketch = (p: p5) => {
  const Th = {
    main: p.color(Rey.main),
    accent: p.color(Rey.accent),
    secondary: p.color(Rey.secondary),
  }

  let s = 512

  let vrtcs = 0

  p.setup = () => {
    p.createCanvas(s, s)
    p.color(Th.accent)
    p.noStroke()
  }

  p.draw = () => {
    p.background(Th.main)

    vrtcs = oscillate({
      amp: 2500,
      freq: 0.1,
      dt: p.millis(),
      fromZero: true
    })

    polypoints({
      v: vrtcs/1000+1,
      c: {x: s/2, y: s/2},
      r: 10 + oscillate({
        amp: 50,
        freq: 0.1,
        dt: p.millis(),
        fromZero: true
      }),
      a: p.PI+p.radians(p.millis()/10)
    }).map((pnt, i) => {
      p.fill(Th.accent)
      p.circle(pnt.x, pnt.y, 10 + oscillate({
        amp: 10,
        freq: 0.1,
        dt: p.millis(),
        fromZero: true,
      }))
    })

    polypoints({
      v: vrtcs*2/1000+1,
      c: {x: s/2, y: s/2},
      r: 10 + oscillate({
        amp: 50,
        freq: 0.1,
        dt: p.millis(),
        fromZero: true,
        phase: 1.5,
      }),
      a: p.PI/2+p.radians(p.millis()/10)
    }).map((pnt, i) => {
      p.fill(Th.secondary)
      p.circle(pnt.x, pnt.y, 10 + oscillate({
        amp: 5,
        freq: 0.1,
        dt: p.millis(),
        phase: p.PI/2
      }))
    })
  }
}

export default sketch