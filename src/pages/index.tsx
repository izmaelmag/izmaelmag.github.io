import React from 'react'
import styled from 'styled-components'
import { ThemeNames } from 'constants/Themes'
import { PageLayout } from 'layouts/PageLayout'
import Sketch from 'sketches/face'
import P5Sketch from 'components/P5Sketch'
import Media from 'utils/Media'

const IndexPage: React.StatelessComponent = () => {
  return (
    <PageLayout
      withBorder={false}
      titleLink='/sine-series'
      layoutTheme={ThemeNames.light}
    >
      <SketchFrame$>
        <P5Sketch sketch={Sketch} />
      </SketchFrame$>
    </PageLayout>
  )
}

export default IndexPage

const SketchFrame$ = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Media.Phone`
    transform: scale(0.75, 0.75)
  `}
  /* border-radius: 8px; */
`