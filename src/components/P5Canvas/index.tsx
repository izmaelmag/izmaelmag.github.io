import React from 'react'

export interface SketchParamsI {
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
}

interface P5CanvasPropsI {
  sketch: (params: SketchParamsI) => void
  canvasProps?: React.HTMLProps<HTMLCanvasElement>
}

class P5Canvas extends React.Component<P5CanvasPropsI> {
  canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef()

  componentDidMount() {
    const canvas = this.canvasRef.current
    const ctx = this.canvasRef.current.getContext('2d')

    this.props.sketch({ ctx, canvas })
  }

  render() {
    const { canvasProps } = this.props

    return (
      <canvas {...canvasProps} ref={this.canvasRef} />
    )
  }
}

export default P5Canvas