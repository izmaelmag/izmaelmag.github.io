import React from 'react'
import styled, { css } from 'styled-components'
import fullscreenIcon from 'images/fullscreen.svg'
import frameIcon from 'images/frame.svg'
import SketchClass from 'sketches/index'

type Controls = {
  fullscreen?: boolean
}

interface CanvasPropsI {
  stretch?: boolean
  w?: number | string
  h?: number | string
  controls?: Controls
  bgColor?: string
  sketch?: SketchClass
  canvasProps?: React.HTMLProps<HTMLCanvasElement>
}

interface CanvasStateI {
  isFullscreen?: boolean
}

interface CanvasInterface extends CanvasPropsI, CanvasStateI {}

class Canvas extends React.Component<CanvasInterface> {
  canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef()

  state: CanvasStateI = {
    isFullscreen: false
  }

  runSketch = () => {
    const { sketch } = this.props 

    if (sketch) {
      sketch.setCanvas(this.canvasRef.current)
      sketch.run()
    } else {
      console.warn('Sketch is not provided')
    }
  }

  toggleFullScreen = () => {
    this.runSketch()
    this.props.sketch.sizeSetup()
    this.setState({
      isFullscreen: !this.state.isFullscreen
    })
  }

  componentDidUpdate = () => {
    this.runSketch()
  }

  componentDidMount() {
    this.runSketch()
  }

  render() {
    const { isFullscreen } = this.state
    const { canvasProps, controls } = this.props

    return (
      <CanvasContainer$ {...this.props} isFullscreen={isFullscreen}>
        <canvas {...canvasProps} ref={this.canvasRef} />

        {controls.fullscreen && (
          <FullSreenButton$
            isFullscreen={isFullscreen}
            onClick={this.toggleFullScreen}
          />
        )}
      </CanvasContainer$>
    )
  }
}

export default Canvas

//region Styled
const CanvasContainer$ = styled.div`
  position: relative;

  ${({ isFullscreen, bgColor, w, h }: CanvasInterface) => isFullscreen ? css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: ${({ theme }) => bgColor ? bgColor : theme.background};
  ` : css`
    width: ${w || '100%'};
    height: ${h || '100%'};
  `}

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const FullSreenButton$ = styled.button`
  position: absolute;
  bottom: 4px;
  right: 4px;
  border: none;
  border-radius: 4px;
  padding: 0;
  width: 32px;
  height: 32px;
  transition: all .3s ease;
  cursor: pointer;
  opacity: 0.75;
  
  ${({ isFullscreen }: CanvasInterface) => css`
    background: url(${isFullscreen ? frameIcon : fullscreenIcon}) no-repeat center;
    background-size: 32px;
  `}

  background-color: ${({ theme }) => theme.gray};

  &:hover {
    opacity: 1;
  }
`
//endregion