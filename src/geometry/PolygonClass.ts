import PointClass from 'geometry/PointClass'
import LineClass from 'geometry/LineClass'

/**
 * Polygon class
 * 
 * Creates new regular polygon with given parameters, calculates arrays of Points and Lines
 * 
 * @param v number of vertices
 * @param r polygon radius
 * @param c polygon center point
 * @param a start angle in radians
 * 
 * @example
 * const Pentagon = new Polygon(5, 100, new PointClass(300, 200), Math.PI)
 * 
 * Pentagon.points.map(point => {...})
 * Pentagon.sides.map(sideLine => {...})
 * 
 * Pentagon
 *   .setRaius(500)
 *   .setAngle(Math.PI/2)
 *   .points.map(point => {...})
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

    this._recalculate()
  }

  //#region Public setters
  public setRadius = (value: number, recalculate: boolean = true) => {
    this.radius = value || this.radius
    recalculate && this._recalculate()
    return this
  }

  public setVertices = (value: number, recalculate: boolean = true) => {
    this.vertices = value || this.vertices
    recalculate && this._recalculate()
    return this
  }

  public setCenter = (value: PointClass, recalculate: boolean = true) => {
    this.center = value || this.center
    recalculate && this._recalculate()
    return this
  }

  public setAngle = (value: number, recalculate: boolean = true) => {
    this.angle = value || this.angle
    recalculate && this._recalculate()
    return this
  }
  //#endregion

  //#region Private methods
  private _recalculate = () => {
    this.updatePoints()
    this.createSides()
  }

  private createSides = () => {
    let lastPoint = this.points[this.points.length-1]

    this.sides = this.points.reduce((accumulator, point, index, points): LineClass[] => {
      return [...accumulator, new LineClass(point, !!index ? points[index+1] : lastPoint)]
    }, [])
  }

  private updatePoints = () => {
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
  //#endregion
}