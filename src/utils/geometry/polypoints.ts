interface PolypointsProps {
  v: number,
  c: Point,
  r: number,
  a: number
}

const polypoints = ({v, c, r, a}: PolypointsProps): Point[] => {
  const points: Point[] = []

  for (let i = 0; i < v; i++) {
    let angle = a + (Math.PI*2/v) * i

    let x = c.x + Math.sin(angle) * r
    let y = c.y + Math.cos(angle) * r

    points.push({x, y})
  }

  return points
}

export default polypoints