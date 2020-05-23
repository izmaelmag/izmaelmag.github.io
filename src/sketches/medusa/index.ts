import p5 from "p5"
import polypoints from 'geometry/polypoints'
import { Colors } from "constants/Styles"
import settingsTransformer from 'utils/settingsTransformer'
import sketchSettings from './sketchSettings'

export interface ISketchSettings {
  vertices?: number,
  thickness?: number,
  polygonsNumber?: number, 
  gap?: number,
  phaseOffset?: number,
  speed?: number,
  amplitude?: number,
  frequency?: number,
  showLines?: boolean,
  showPolygons?: boolean
}

export const defaultSettings = settingsTransformer.toObject<ISketchSettings>(sketchSettings)

const sketch = (settings: ISketchSettings) => (p: p5) => {
  let dt = 0
  let fps: number = 0

  const Center = {
    x: p.windowWidth / 2,
    y: p.windowHeight / 2
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noStroke()
  }
  
  p.draw = () => {
    let mainColor = `rgba(255, 0, 92, ${dt < 100 ? dt/25 : '1'})`

    if (dt % 5 === 0) {
      fps = p.frameRate()
    } 

    p.clear()
    p.background(Colors.Black(90))

    if (settings.showPolygons || settings.showLines) {
      p.stroke(mainColor)
      p.strokeWeight(settings.thickness/4)
      p.noFill()
    } else {
      p.fill(mainColor)
    }

    for (let i = settings.polygonsNumber; i > 0; i--) {
      let currentPoints = polypoints(
        settings.vertices,
        Center,
        (i+1) * settings.gap + settings.phaseOffset * Math.sin(dt*settings.speed/50 + i * 0.2),
        p.radians((settings.amplitude + settings.frequency) * Math.sin(dt*settings.speed/100 + i * 0.2 * settings.frequency))
      )

      if (settings.showPolygons) {
        p.beginShape()
        currentPoints.map(({x, y}) => p.vertex(x, y))
        p.endShape(p.CLOSE)
      }
        
      if (settings.showLines) {
        let prevPoints = polypoints(
          settings.vertices,
          Center,
          (i) * settings.gap + settings.phaseOffset * Math.sin(dt*settings.speed/50 + (i-1) * 0.2),
          p.radians((settings.amplitude + settings.frequency) * Math.sin(dt*settings.speed/100 + (i-1) * 0.2 * settings.frequency))
        )
  
        currentPoints.map(({ x, y }, i) => {
          p.line(x, y, prevPoints[i].x, prevPoints[i].y)
        })
      }
      
      if (!settings.showLines && !settings.showPolygons) {
        currentPoints.forEach(({x, y}) => p.circle(x, y, settings.thickness))
      }
    }
    
    p.textSize(14)
    p.fill('rgba(255, 255, 255, 0.5)')
    p.text(`FPS: ${fps && fps.toFixed(0)}`, 16, p.windowHeight - 16)

    dt += 1
  }
}

export default sketch