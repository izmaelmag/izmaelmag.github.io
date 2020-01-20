import SketchClass from 'sketches/index'
import Polygon from 'sketches/Polygon'

class Sketch extends SketchClass {
  shapes: Polygon[] = []
  angle: number = 0
  
  init = () => {
    this.draw()
    this.shapes.push(new Polygon({
      center: {
        x: this.CW / 2,
        y: this.CH / 2
      },
      angle: Math.PI,
      vertices: 10,
      radius: 200,
      ctx: this.ctx
    }))

    this.shapes.push(new Polygon({
      center: {
        x: this.CW / 2,
        y: this.CH / 2
      },
      angle: Math.PI / 2,
      vertices: 10,
      radius: 150,
      ctx: this.ctx
    }))

    this.shapes.push(new Polygon({
      center: {
        x: this.CW / 2,
        y: this.CH / 2
      },
      angle: Math.PI,
      vertices: 10,
      radius: 100,
      ctx: this.ctx
    }))

    this.shapes.push(new Polygon({
      center: {
        x: this.CW / 2,
        y: this.CH / 2
      },
      angle: Math.PI / 2,
      vertices: 10,
      radius: 50,
      ctx: this.ctx
    }))
  }

  draw = (dt?: number) => {
    const { ctx, CW, CH, shapes } = this
    ctx.clearRect(0, 0, CW, CH)
    
    this.angle += Math.PI / 360
    
    let n = 1

    shapes.forEach((shape, i) => {

      if (i % 2 === 0) {
        n = -1
        ctx.fillStyle = 'red'
      } else {
        n = 1
        ctx.fillStyle = 'white'
      }

      const { radius } = shape.props

      shape.update({
        radius: radius + Math.sin((this.angle + 10*i) * 10) * 20
      })
    })

    window.requestAnimationFrame(this.draw)
  }
}

export default new Sketch()