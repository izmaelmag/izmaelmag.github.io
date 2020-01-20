class Polygon {
  props: PolygonI

  constructor(props: PolygonI) {
    this.props = props
  }

  render = (props: PolygonI) => {
    const { ctx, vertices, center, radius, angle } = props
    
    let startAngle = angle || Math.PI

    for (let i = 0; i < vertices; i++) {
      ctx.beginPath()
      let angle = startAngle + (Math.PI*2/vertices) * i

      let x = center.x + Math.sin(angle) * radius
      let y = center.y + Math.cos(angle) * radius

      ctx.arc(x, y, 4, 0, Math.PI*2, false)
      ctx.fill()
    }
  }

  update = (payload?: PolygonI) => {
    this.render({
      ...this.props,
      ...payload
    })
  }
}

export default Polygon
