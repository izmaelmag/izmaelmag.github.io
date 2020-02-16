import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { ThemeNames } from 'constants/Themes'
import { SketchGallery } from 'layouts/SketchGallery'
import P5Sketch from 'components/P5Sketch'
import sketches from 'sketches/poly'
import Media from 'utils/Media'

const SineSeries1: FunctionComponent = () => {
  const [settings, setSettings] = useState({
    vertices: 6,
    polygonsNumber: 25,
    gap: 20,
    amplitude: 10,
    size: window.innerWidth < 512 ? window.innerWidth : 512
  })

  const [sketchIndex, setSketchIndex] = useState(0)
  const isLastSketch = sketchIndex === sketches.length - 1

  const setVerticesCount = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const vertices = Number(e.currentTarget.value)

    setSettings({
      ...settings,
      vertices
    })
  } 

  const setGapSize = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const gap = Number(e.currentTarget.value)

    setSettings({
      ...settings,
      gap
    })
  } 

  const setPolygonsNumber = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const polygonsNumber = Number(e.currentTarget.value)

    setSettings({
      ...settings,
      polygonsNumber
    })
  } 

  const setAmplitude = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const amplitude = Number(e.currentTarget.value)

    setSettings({
      ...settings,
      amplitude
    })
  } 

  return (
    <SketchGallery title='Polygons' layoutTheme={ThemeNames.light}>
      <div>
        <Button$ disabled={!sketchIndex} onClick={() => setSketchIndex(sketchIndex - 1)}>
          Previous
        </Button$>

        <Button$ disabled={isLastSketch} onClick={() => setSketchIndex(sketchIndex + 1)}>
          Next
        </Button$>
      </div>

      <SketchFrame$>
        <P5Sketch sketch={sketches[sketchIndex](settings)} />
      </SketchFrame$>


      <Controls$>
        <ControlGroup$>
          <ControlLabel$>Vertices: {settings.vertices}</ControlLabel$>
          <input
            value={settings.vertices}
            type='range'
            min={3}
            max={8}
            step={1}
            onChange={setVerticesCount}
          />
        </ControlGroup$>

        <ControlGroup$>
          <ControlLabel$>Zoom: {settings.gap}</ControlLabel$>
          <input
            value={settings.gap}
            type='range'
            min={5}
            max={50}
            step={1}
            onChange={setGapSize}
          />
        </ControlGroup$>

        <ControlGroup$>
          <ControlLabel$>Count: {settings.polygonsNumber}</ControlLabel$>
          <input
            value={settings.polygonsNumber}
            type='range'
            min={1}
            max={50}
            step={1}
            onChange={setPolygonsNumber}
          />
        </ControlGroup$>

        <ControlGroup$>
          <ControlLabel$>Amplitude: {settings.amplitude}</ControlLabel$>
          <input
            value={settings.amplitude}
            type='range'
            min={1}
            max={50}
            step={1}
            onChange={setAmplitude}
          />
        </ControlGroup$>
      </Controls$>

    </SketchGallery>
  )
}

export default SineSeries1

//#region Styled
const SketchFrame$ = styled.div`
  position: relative;
  line-height: 0;
`

const Controls$ = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 512px;

  ${Media.Phone`
    width: 100%;
    flex-direction: column;
  `}
`

const Button$ = styled.button`
  border: none;
  background: #333;
  height: 32px;
  line-height: 32px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  width: 140px;
  z-index: 10;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background: #000;
  }

  &:first-child {
    border-radius: 50px 0 0 50px;
    border-right: 1px solid #000;
  }

  &:last-child {
    border-radius: 0 50px 50px 0;
  }

  &:disabled {
    opacity: 0.2;
    cursor: default;
  }

  &:disabled:hover {
    opacity: 0.2;
    cursor: default;
    background: #333;
  }
`

const ControlGroup$ = styled.div`
  width: 240px;
  margin: 10px 0 0;
  display: flex;
  align-items: center;

  input {
    display: block;
    flex: 1 0;
  }

  ${Media.Phone`
    width: 100%;
  `}
`

const ControlLabel$ = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: sans-serif;
  margin-right: 10px;
  flex-shrink: 0;
`
//#endregion