import PointClass from 'geometry/PointClass'

/**
 * Polypoints returns array of points of polygon
 * 
 * @param v — number of vertices
 * @param c — polygon center point
 * @param r — polygon radius
 * @param a — start angle in radians
 */

export default function polypoints(
  v: number = 3,
  c: Point  = new PointClass(0, 0),
  r: number = 100,
  a: number = Math.PI/2
): Point[] {
  const points: Point[] = []

  for (let i = 0; i < v; i++) {
    points.push({
      x: c.x + Math.sin(a + (Math.PI*2/v) * i) * r, 
      y: c.y + Math.cos(a + (Math.PI*2/v) * i) * r
    })
  }

  return points
}