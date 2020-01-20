export interface SketchParamsI {
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
}

export default class SketchClass {
  canvas: HTMLCanvasElement = undefined
  ctx: CanvasRenderingContext2D = undefined
  CW: number = 0
  CH: number = 0
  isRun: boolean = false
  resizeListener: void

  setCanvas = (canvas: HTMLCanvasElement) => {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
  }

  start = () => {
    this.isRun = true
  }

  sizeSetup = () => {
    const w = this.canvas.clientWidth * window.devicePixelRatio
    const h = this.canvas.clientHeight * window.devicePixelRatio

    this.ctx.canvas.width = this.CW = w
    this.ctx.canvas.height = this.CH = h
  }

  init() {
    alert('You must specify init() and draw() methods')
  }

  draw() {}

  onResize = () => {
    this.sizeSetup()
  }

  run = () => {
    if (!this.canvas) {
      console.warn('HTML Canvas element is not provided. Use setCanvas() method')
      return
    }

    this.sizeSetup()

    if (!this.isRun) {
      this.isRun = true
      this.init()
    }

    this.resizeListener = window.addEventListener('resize', this.onResize)
  }
}