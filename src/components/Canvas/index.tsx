import React from 'react'
import styled, { css, StyledComponent } from 'styled-components'
import fullscreenIcon from 'images/fullscreen.svg'
import frameIcon from 'images/frame.svg'

export interface SketchParamsI {
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
}

interface CanvasPropsI {
  stretch?: boolean
  w?: number | string
  h?: number | string
  fullscreen?: boolean
  bgColor?: string
  sketch?: (params: SketchParamsI) => void
  canvasProps?: React.HTMLProps<HTMLCanvasElement>
}

class Canvas extends React.Component<CanvasPropsI> {
  canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef()

  state = {
    isFullscreen: false
  }

  toggleFullScreen = () => this.setState({ isFullscreen: !this.state.isFullscreen })

  componentDidMount() {
    const canvas = this.canvasRef.current
    const ctx = this.canvasRef.current.getContext('2d')

    if (this.props.sketch) {
      this.props.sketch({ ctx, canvas })
    }
  }

  render() {
    const { isFullscreen } = this.state
    const { canvasProps, fullscreen } = this.props

    return (
      <CanvasContainer$ {...this.props} fullscreen={isFullscreen}>
        <canvas {...canvasProps} ref={this.canvasRef} />

        {fullscreen && (
          <FullSreenButton$
            fullscreen={isFullscreen}
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

  ${({ fullscreen, bgColor, w, h }: CanvasPropsI) => fullscreen ? css`
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
  
  ${({ fullscreen }: CanvasPropsI) => css`
    background: url(${
      fullscreen ? frameIcon : fullscreenIcon 
    }) no-repeat center;
    background-size: 32px;
  `}

  background-color: ${({ theme }) => theme.gray};

  &:hover {
    opacity: 1;
  }
`
//endregion