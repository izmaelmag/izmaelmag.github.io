import PointClass from 'geometry/PointClass'

export default class LineClass {
  public givenPoints: Point[]
  public length: number
  public center: Point

  constructor(p1: Point = new PointClass(0, 0), p2: Point = new PointClass(1, 1)) {
    this.givenPoints = [p1, p2]

    this.init()
  }

  init = () => {
    this.getLength()
    this.getCenter()
  }

  private getCenter = () => {
    const [p1, p2] = this.givenPoints

    this.center = new PointClass(
      (p1.x + p2.x)/2,
      (p1.y + p2.y)/2
    )
  }

  private getLength = () => {
    const [p1, p2] = this.givenPoints

    let yLength = Math.abs(p2.y - p1.y)
    let xLength = Math.abs(p2.x - p1.x)

    this.length = Number(Math.sqrt(yLength*yLength + xLength*xLength).toFixed(2))
  }
}