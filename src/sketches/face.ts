import p5 from "p5"
import { facePoints, shadePoints } from 'constants/Face'
import oscillate from "utils/geometry/oscillate"

const sketch = (p: p5) => {
  let dt = 0

  const drawRectanglesFromPoints = (PointsArray: number[][][], offsetX: number, offsetY: number) => {
    for (let Si = 0; Si < PointsArray.length; Si++) {
      const shape = PointsArray[Si]

      p.beginShape()
      for (let i = 0; i < PointsArray[Si].length; i++) {
        const x = shape[i][0] 
        const y = shape[i][1]

        p.vertex(x-offsetX,y-offsetY, oscillate({ dt, amp: 10, freq: 2, phase: Si}) )
      }
      p.endShape()
    }
  }

  p.setup = () => {
    p.createCanvas(window.innerHeight, window.innerHeight, p.WEBGL)
    p.setAttributes('antialias', true);
    p.noStroke()
  }
  
  p.draw = () => {
    dt += 1
    p.clear()
    p.fill(0)
    drawRectanglesFromPoints(facePoints, 213, 228)
    p.fill(220)
    drawRectanglesFromPoints(shadePoints, 252, 253)
  }
}

export default sketch