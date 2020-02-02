import React from 'react'
import p5 from 'p5'

interface P5SketchProps {
  sketch: (p: p5) => void
}

class P5Sketch extends React.Component<P5SketchProps> {
  sketchContainerRef: React.RefObject<HTMLDivElement> = React.createRef()
  canvas?: p5 = undefined

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.sketchContainerRef.current)
  }

  componentDidUpdate() {
    this.canvas.remove()
    this.canvas = new p5(this.props.sketch, this.sketchContainerRef.current)
  }

  componentWillUnmount() {
    this.canvas.remove()
  }

  render () {
    return <div ref={this.sketchContainerRef} />
  }
}

export default P5Sketch