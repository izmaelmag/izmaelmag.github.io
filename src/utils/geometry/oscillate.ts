interface oscillateParams {
  freq?: number
  amp?: number
  dt: number
  fromZero?: boolean
  whole?: boolean
  phase?: number
}

const getSine = ({
  dt = 0,
  freq = 1,
  amp = 1,
  fromZero = false,
  phase = 0
}: oscillateParams): number => {
  return amp * Math.sin(dt * (freq/60) + phase) + (fromZero ? amp/2 : 0)
}

const oscillate = (params: oscillateParams): number => {
  return params.whole
      ? parseInt(getSine(params).toFixed(0))
      : parseInt(getSine(params).toFixed(2))
}

export default oscillate