import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeNames } from 'constants/Themes'
import { SketchGallery } from 'layouts/SketchGallery'
import P5Sketch from 'components/P5Sketch'
import Range from 'components/Range'
import Pagination from 'components/Pagination'
import sketches from 'sketches/poly'
import { Controls$, ControlGroup$ } from 'components/Controls'

const SineSeries1: FunctionComponent = () => {
  const [settings, setSettings] = useState({
    vertices: 6,
    polygonsNumber: 25,
    gap: 20,
    amplitude: 10,
    size: 512
  })
  const [sketchIndex, setSketchIndex] = useState(0)

  const sketchItems = sketches.map((sketch, i) => ({
    onClick: () => setSketchIndex(i)
  }))

  useEffect(() => {
    try {
      setSettings({
        ...settings,
        size: window.innerWidth < 512 ? window.innerWidth : 512
      })
    } catch(e) {
      console.log(e)
    }
  }, [])


  const updateSettingsValue = (fieldName: string) => (value: number) => {
    setSettings({
      ...settings,
      [fieldName]: value
    })
  }

  return (
    <SketchGallery title='Polygons' layoutTheme={ThemeNames.light}>
      <Pagination items={sketchItems} activeIndex={sketchIndex} />

      <SketchFrame$>
        <P5Sketch sketch={sketches[sketchIndex](settings)} />
      </SketchFrame$>

      <Controls$>
        <ControlGroup$>
          <Range
            handleChange={updateSettingsValue('vertices')}
            values={[2, 10, 1]}
            initialValue={settings.vertices}
            label='Vertices'
            showValue
          />
        </ControlGroup$>
        
        <ControlGroup$>
          <Range
            handleChange={updateSettingsValue('polygonsNumber')}
            values={[1, 50, 1]}
            initialValue={settings.polygonsNumber}
            label='Shapes count'
            showValue
          />
        </ControlGroup$>

        <ControlGroup$>
          <Range
            handleChange={updateSettingsValue('amplitude')}
            values={[0, 50, 1]}
            initialValue={settings.amplitude}
            label='Amplitude'
            showValue
          />
        </ControlGroup$>

        <ControlGroup$>
          <Range
            handleChange={updateSettingsValue('gap')}
            values={[5, 50, 1]}
            initialValue={settings.gap}
            label='Size'
            showValue
          />
        </ControlGroup$>
      </Controls$>

    </SketchGallery>
  )
}

export default React.memo(SineSeries1)

//#region Styled
const SketchFrame$ = styled.div`
  position: relative;
  line-height: 0;
  border-radius: 6px;
  overflow: hidden;
`
//#endregion