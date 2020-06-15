import p5 from "p5"
import polypoints from 'geometry/polypoints'
import settingsTransformer from 'utils/settingsTransformer'
import sketchSettings from './sketchSettings'
import PointClass from "geometry/PointClass"

export interface ISketchSettings {
  branches?: number,
  startRadius?: number
}

export const defaultSettings = settingsTransformer.toObject<ISketchSettings>(sketchSettings)

interface ISine {
  amplitude: number,
  
}

const sketch = (settings: ISketchSettings) => (p: p5) => {
  const WindowCenter = new PointClass(p.windowWidth / 2, p.windowHeight / 2)

  const StartPoints = polypoints(settings.branches, WindowCenter, settings.startRadius, Math.PI/2)
  const sines = []

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noStroke()
  }
  
  p.draw = () => {
    p.clear()
    p.background('#fff')
  }
}

export default sketch