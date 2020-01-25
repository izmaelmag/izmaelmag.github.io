import SketchClass from 'sketches/index'
import oscillate from 'utils/geometry/oscillate'
import { PageThemes } from 'constants/Themes'
import Vector from 'utils/geometry/vector'
import toRad from 'utils/geometry/toRad'

class Sketch extends SketchClass {
  points: PointCartesian[] = []
  
  init = () => {
    this.draw()
  }

  clear = (fade: boolean = false) => {
    const { ctx, CW, CH } = this
    
    if (fade) {
      ctx.save()
      ctx.globalAlpha = 0.05
      ctx.fillStyle = PageThemes.dark.background
      ctx.fillRect(0, 0, CW, CH)
      ctx.globalAlpha = 1

      return
    }

    ctx.clearRect(0, 0, CW, CH)
  } 

  dot = (x: number, y: number, s: number = 2, c: string = 'white') => {
    const { ctx, tau } = this
    ctx.fillStyle = c
    ctx.beginPath()
    ctx.arc(x, y, s, 0, tau, false)
    ctx.fill()
  }

  circle = (x: number, y: number, r: number, c: string = 'white') => {
    const { ctx, tau } = this
    ctx.strokeStyle = c
    ctx.beginPath()
    ctx.ellipse(x, y, r, r, 0, 0, tau, false)
    ctx.stroke()
  }

  line = (p1: PointCartesian, p2: PointCartesian, c?: string) => {
    const { ctx } = this
    ctx.strokeStyle = c
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.stroke()
  }

  drawLissagouCurve = () => {
    this.points.forEach((p: PointCartesian) => this.dot(
      p.x, p.y, 2, 'red'
    ))
  }

  draw = () => {
    const {dt, CW, CH, ctx } = this
    this.tick(1)
    this.clear()

    const c1 = {x: 110, y: this.CH/2, r: 100}
    const c2 = {x: this.CW/2, y: 110, r: 100}

    this.circle(c1.x, c1.y, c1.r, 'white')
    this.circle(c2.x, c2.y, c2.r, 'white')

    const [v1x, v1y] = Vector({r: c1.r, a: dt*2, deg: true})
    const [v2x, v2y] = Vector({r: c2.r, a: dt*3.2 + 90 + dt, deg: true})

    this.points.push({
      x: CW/2 + v2x,
      y: CH/2 + v1y
    })

    this.drawLissagouCurve()

    this.dot(CW/2 + v2x, CH/2 + v1y, 6, 'red')

    this.line({ 
      x: c1.x + v1x, y: c1.y + v1y
    }, {
      x: CW/2 + v2x, y: CH/2 + v1y
    }, 'red')

    this.line({ 
      x: c2.x + v2x, y: c2.y + v2y
    }, {
      x: CW/2 + v2x, y: CH/2 + v1y
    }, 'red')

    this.dot(c1.x + v1x, c1.y + v1y, 6, 'white')
    this.dot(c2.x + v2x, c2.y + v2y, 6, 'white')

    window.requestAnimationFrame(this.draw)
  }
}

export default new Sketch()