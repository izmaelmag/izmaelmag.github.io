import p5 from "p5"
import polypoints from 'geometry/polypoints'
import { Colors } from "constants/Styles"
import settingsTransformer from 'utils/settingsTransformer'
import sketchSettings from './sketchSettings'

export interface ISketchSettings {
  radius: number
}

let Size = 300;

if (typeof window !== "undefined") {
  const { innerWidth, innerHeight } = window
  let isPortrait = innerHeight > innerWidth

  Size = isPortrait ? innerWidth - 64 : innerHeight - 100
}

const noiseLoop = (p: p5, d: number, min: number, max: number, angle: number) => {
  let xOff = p.map(Math.cos(angle), -1, 1, 0, d)
  let yOff = p.map(Math.sin(angle), -1, 1, 0, d)
  return p.map(p.noise(xOff, yOff), 0, 1, min, max)
}

export const defaultSettings = settingsTransformer.toObject<ISketchSettings>(sketchSettings)

const sketch1 = (settings: ISketchSettings) => (p: p5) => {
  let fps: number = 0
  let s1: number = p.random(0, 1000)
  let s2: number = p.random(0, 1000)
  let x: number, y: number;

  p.setup = () => {
    p.createCanvas(Size, Size)
    p.background('white')
  }

  p.draw = () => {
    let dt = Number(p.millis().toFixed(2))
    let dts = dt / 4000
    
    // p.noiseDetail(8, 0.2)
    p.noiseSeed(s1)
    p.stroke('black')
    x = Size * p.noise(0, dts)
    y = Size * p.noise(0, dts+10)
    p.circle(x, y, 0.5)
    p.circle(Size - x, y, 0.5)
    
    p.noiseSeed(s2)
    p.stroke('red')
    x = Size * p.noise(0, dts)
    y = Size * p.noise(0, dts+2)
    p.circle(x, y,0.5)
    p.circle(Size - x, y, 0.5)

    // Show framerate
    if (dt % 6 === 0) fps = p.frameRate()
    p.noStroke()
    p.textSize(10)
    p.fill('white')
    p.rect(0, Size - 20, 160, Size - 20)
    p.fill('rgba(0,0,0,0.5)')
    p.text(`FPS: ${fps && fps.toFixed(0)}`, 6, Size - 6)
  }
}

const sketch2 = (settings: ISketchSettings) => (p: p5) => {
  let fps: number = 0
  let s1: number = p.random(0, 1000)
  let s2: number = p.random(0, 1000)
  let s3: number = p.random(0, 1000)
  let s4: number = p.random(0, 1000)

  p.setup = () => {
    p.createCanvas(Size, Size)
    p.background('white')
  }

  p.draw = () => {
    p.clear()
    
    let dt = Number(p.millis().toFixed(1))

    p.stroke(`rgb(50, 50, 50)`)
    p.noiseSeed(s1)
    p.line(0, Size * p.noise(0, dt/2000), Size, Size * p.noise(0, dt/3000))
    p.noiseSeed(s2)
    p.line(0, Size * p.noise(0, dt/2000), Size, Size * p.noise(0, dt/3000))
    
    p.stroke(`rgb(50, 50, 50)`)
    p.noiseSeed(s3)
    p.line(Size * p.noise(dt/2000), 0, Size * p.noise(dt/3000), Size)
    p.noiseSeed(s4)
    p.line(Size * p.noise(dt/2000), 0, Size * p.noise(dt/3000), Size)


    // Show framerate
    if (dt % 6 === 0) fps = p.frameRate()
    p.noStroke()
    p.textSize(10)
    p.fill('rgba(0,0,0,0.5)')
    p.text(`FPS: ${fps && fps.toFixed(0)}`, 6, Size - 6)
  }
}

export default sketch1