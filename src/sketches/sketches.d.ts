interface Shape {
  ctx?: CanvasRenderingContext2D
}

interface PointCartesian {
  x?: number,
  y?: number,
}

interface PointPolar {
  r?: number,
  th?: number
}

interface Point extends PointCartesian, PointPolar {}

interface PolygonI extends Shape {
  center?: Point
  vertices?: number
  radius?: number
  angle?: number
}