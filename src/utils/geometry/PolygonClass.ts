import PointClass from 'utils/geometry/PointClass'
import LineClass from 'utils/geometry/LineClass'

/**
 * Polygon class
 * 
 * @param v – number of vertices
 * @param c — polygon center point
 * @param r — polygon radius
 * @param a — start angle in radians
 */
export default class Polygon {
  public vertices: number
  public radius: number
  public center: PointClass
  public angle: number
  
  public points: PointClass[] = []
  public sides: LineClass[] = []

  constructor(v: number = 0, r: number = 1, c: PointClass = new PointClass(0, 0), a: number = Math.PI/2) {
    this.vertices = v
    this.radius = r
    this.center = c
    this.angle = a

    this.init()
  }

  private init = () => {
    this.createPoints()
    this.createSides()
  }

  private createSides = () => {
    let lastPoint = this.points[this.points.length-1]

    this.sides = this.points.reduce((accumulator, point, index, points): LineClass[] => {
      return [...accumulator, new LineClass(point, !!index ? points[index+1] : lastPoint)]
    }, [])
  }

  private createPoints = () => {
    for (let i = 0; i < this.vertices; i++) {
      const {
        angle,
        vertices,
        radius,
        center: {
          x,
          y
        } 
      } = this

      this.points.push(new PointClass(
        x + Math.sin(angle + (Math.PI*2/vertices) * i) * radius,
        y + Math.cos(angle + (Math.PI*2/vertices) * i) * radius
      ))
    }
  }
}