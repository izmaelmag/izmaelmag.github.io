export default class PointClass {
  x: number
  y: number
  
  constructor(x: number, y: number) {
    this.x = Number(x.toFixed(0))
    this.y = Number(y.toFixed(0))
  }
}