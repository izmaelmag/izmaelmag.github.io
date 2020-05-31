import React, { useState, FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import FullscreenDemo from 'layouts/FullscreenDemo'
import { Interface$, Corner$ } from 'layouts/FullscreenDemo/styles'
import { Colors } from 'constants/Styles'
import P5Sketch from 'components/P5Sketch'
import PageTitle from 'components/PageTitle'
import SettingsPanel from 'components/SettingsPanel'
import sketch, { defaultSettings } from 'sketches/noise'
import sketchSettings from 'sketches/noise/sketchSettings'
import SEO from 'components/seo'

const SineSeries1: FunctionComponent = () => {
  const [settings, setSettings] = useState(defaultSettings)

  return (
    <div className="light-theme">
      <SEO title="Noise" /> 

      <FullscreenDemo>
        <Interface$>
          <Corner$ top left>
            <PageTitle title='Perlin noise' />
            <Link to="/">Home</Link>
          </Corner$>

          <Corner$ top right> 
            {/* <SettingsPanel onChange={setSettings} settings={sketchSettings} /> */}
          </Corner$>
        </Interface$>

        <SketchFrame$>
          <SketchWrapper$>
            <P5Sketch sketch={sketch(settings)} />
          </SketchWrapper$>
        </SketchFrame$>
      </FullscreenDemo>
    </div>
  )
}

export default React.memo(SineSeries1)

//#region Styled
const SketchFrame$ = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.CSS.bg}
`

const SketchWrapper$ = styled.div`
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.1);
`
//#endregion