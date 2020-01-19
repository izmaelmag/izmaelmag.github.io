import React from 'react'
import styled from 'styled-components'
import { ThemeNames } from 'constants/Themes'
import { PageLayout } from 'layouts/PageLayout'
import Canvas, { SketchParamsI } from 'components/Canvas'

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
    >
      <SketchFrame$>
        <Canvas fullscreen sketch={sketch} />
      </SketchFrame$>
    </PageLayout>
  )
}

export default SineSeries1

const SketchFrame$ = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.gray};
`