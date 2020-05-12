import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import P5Sketch from 'components/P5Sketch'
import FullscreenDemo from 'layouts/FullscreenDemo'
import { Interface$, Corner$ } from 'layouts/FullscreenDemo/styles'
import PageTitle from 'components/PageTitle'
import sketches, { sketchSettings } from 'sketches/poly'
import { useStaticQuery, graphql } from 'gatsby'
import SettingsPanel from 'components/SettingsPanel'

const SineSeries1: FunctionComponent = () => {
  const { page } = useStaticQuery(graphql`
    query AnimationPage {
      page: contentfulAnimationPage(slug: {eq: "sine-polygons"}, node_locale: {eq: "ru"}) {
        slug
        title
      }
    }
  `)

  return (
    <FullscreenDemo>
      <Interface$>
        <Corner$ top left>
          <PageTitle title={page.title} />
        </Corner$>

        <Corner$ top right> 
          <SettingsPanel onChange={console.log} settings={sketchSettings} />
        </Corner$>
      </Interface$>

      <SketchFrame$>
        <P5Sketch sketch={sketches[3]({})} />
      </SketchFrame$>
    </FullscreenDemo>
  )
}

export default React.memo(SineSeries1)

//#region Styled
const SketchFrame$ = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
//#endregion