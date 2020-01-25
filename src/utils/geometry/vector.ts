import toRad from "./toRad"

interface VectorParams {
  r: number,
  a: number,
  deg?: boolean
}

const Vector = ({ r, a, deg }: VectorParams): number[] => {
  return [
    r * Math.sin((deg ? toRad(a) : a)),
    r * Math.cos((deg ? toRad(a) : a)),
  ]
}

export default Vector