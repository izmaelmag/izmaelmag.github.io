import React from 'react'
import styled from 'styled-components'
import { ThemeNames } from 'constants/Themes'
import { PageLayout } from 'layouts/PageLayout'
import Sketch from 'sketches/sine/sine3'
import P5Wrapper from 'react-p5-wrapper'

const SineSeries1: React.StatelessComponent = () => {
  return (
    <PageLayout
      withBorder={false}
      titleLink='/sine-series'
      layoutTheme={ThemeNames.light}
      title='Sine series: Polygons'
    >
      <SketchFrame$>
        <P5Wrapper sketch={Sketch} />
      </SketchFrame$>
    </PageLayout>
  )
}

export default SineSeries1

const SketchFrame$ = styled.div`
  width: 512px;
  height: 512px;
  overflow: hidden;
  /* border-radius: 8px; */
`