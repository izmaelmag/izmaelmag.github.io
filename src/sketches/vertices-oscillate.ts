// import p5 from "p5"
// import { ColorSchemeT, Ren, Rey } from 'constants/ColorSchemes'
// import polypoints from 'utils/geometry/polypoints'
// import oscillate from "utils/geometry/oscillate"

// interface FigureI {
//   vertices: number,
//   color?: p5.Color
//   lines?: {
//     show?: boolean,
//     width?: number
//   },
//   dots?: {
//     show?: boolean,
//     radius?: number
//   }
// }

// export interface sketchParamsI {
//   size?: number
//   scheme: ColorSchemeT,
//   figures: FigureI[]
// }

// export const defaultParams: sketchParamsI = {
//   scheme: Rey,
//   size: 512,
//   figures: [
//     {
//       vertices: 6,
//       dots: {
//         show: true,
//         radius: 2
//       },
//       lines: {
//         show: false
//       }
//     }
//   ]
// }

// const sketch = ({ scheme, size, figures }: sketchParamsI = defaultParams) => (p: p5) => {

//   const Scheme = {
//     main: p.color(scheme.main),
//     accent: p.color(scheme.accent),
//     secondary: p.color(scheme.secondary),
//   }

//   let vrtcs = 0

//   p.setup = () => {
//     p.createCanvas(size, size)
//     p.color(Scheme.accent)
//     p.noStroke()
//   }

//   p.draw = () => {
//     p.background(Scheme.main)

//     vrtcs = oscillate({
//       amp: 2500,
//       freq: 0.1,
//       dt: p.millis(),
//       fromZero: true
//     })

//     polypoints({
//       v: vrtcs/1000+1,
//       c: {x: p.width/2, y: p.height/2},
//       r: 10 + oscillate({
//         amp: 50,
//         freq: 0.1,
//         dt: p.millis(),
//         fromZero: true
//       }),
//       a: p.PI+p.radians(p.millis()/10)
//     }).map((pnt, i) => {
//       p.fill(Scheme.accent)
//       p.circle(pnt.x, pnt.y, 10 + oscillate({
//         amp: 10,
//         freq: 0.1,
//         dt: p.millis(),
//         fromZero: true,
//       }))
//     })

//     polypoints({
//       v: vrtcs*2/1000+1,
//       c: {x: p.width/2, y: p.height/2},
//       r: 10 + oscillate({
//         amp: 50,
//         freq: 0.1,
//         dt: p.millis(),
//         fromZero: true,
//         phase: 1.5,
//       }),
//       a: p.PI/2+p.radians(p.millis()/10)
//     }).map((pnt, i) => {
//       p.fill(Scheme.secondary)
//       p.circle(pnt.x, pnt.y, 10 + oscillate({
//         amp: 5,
//         freq: 0.1,
//         dt: p.millis(),
//         phase: p.PI/2
//       }))
//     })
//   }
// }

// export default sketch