import React from 'react'
import { ThemeNames } from 'constants/Themes'
import { PageLayout } from 'layouts/PageLayout'
import P5Canvas, { SketchParamsI } from 'components/P5Canvas'

const sketch = ({ ctx, canvas }: SketchParamsI) => {
  function start() {
    draw()
  }

  function draw() {
    window.requestAnimationFrame(draw);
  }

  start();
}

const SineSeries1: React.StatelessComponent = () => {
  return (
    <PageLayout
      titleLink='sine-series/'
      layoutTheme={ThemeNames.dark}
      title='Sine series'
      subtitle='Sine 1'
    >
      <P5Canvas canvasProps={{
        width: 360,
        height: 360
      }} sketch={sketch} />
    </PageLayout>
  )
}

export default SineSeries1