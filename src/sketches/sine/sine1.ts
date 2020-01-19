import SketchClass from 'sketches/index'

class Sketch extends SketchClass {
  angle: number
  
  init = () => {
    this.draw()
    this.angle = 0
  }

  draw = (dt?: number) => {
    const { ctx, angle, CW, CH } = this

    ctx.clearRect(0, 0, CW, CH)

    let x = CW / 2+ Math.sin(angle) * 50
    let y = CH / 2+ Math.cos(angle) * 50

    ctx.fillStyle = '#fff'
    ctx.fillRect(x, y, 10, 10)

    this.angle += Math.PI / 180 * 2

    window.requestAnimationFrame(this.draw)
  }
}

export default new Sketch()