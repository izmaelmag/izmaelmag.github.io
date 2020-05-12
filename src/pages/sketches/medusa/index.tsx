import React, { useState, FunctionComponent } from 'react'
import styled from 'styled-components'
import FullscreenDemo from 'layouts/FullscreenDemo'
import { Interface$, Corner$ } from 'layouts/FullscreenDemo/styles'
import sketch, { sketchSettings, defaultSettings } from 'sketches/medusa'
import { Colors } from 'constants/Styles'
import P5Sketch from 'components/P5Sketch'
import PageTitle from 'components/PageTitle'
import SettingsPanel from 'components/SettingsPanel'

const SineSeries1: FunctionComponent = () => {
  const [settings, setSettings] = useState(defaultSettings)

  return (
    <FullscreenDemo>
      <Interface$>
        <Corner$ top left>
          <PageTitle title='Medusa' />
        </Corner$>

        <Corner$ top right> 
          <SettingsPanel onChange={setSettings} settings={sketchSettings} />
        </Corner$>
      </Interface$>

      <SketchFrame$>
        <P5Sketch sketch={sketch(settings)} />
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
  background-color: ${Colors.Black()}
`
//#endregion