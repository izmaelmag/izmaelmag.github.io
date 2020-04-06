import { css } from 'styled-components'

type UnderlineTextOptsT = {
  color?: string,
  position?: number
}

export const SansSerif = css`
  font-family: 'Montserrat', sans-serif;
`

export const Colors = {
  Black: (opaque: number = 100) => `rgba(0, 0, 0, ${opaque * 0.01})`,
  Blue: (opaque: number = 100) => `rgba(0, 166, 200, ${opaque * 0.01})`,
  Gray100: '#FAFAFA'
}

export const UnderlineText = ({
  color = 'currentColor',
  position = 1.04
}: UnderlineTextOptsT) => css`
  background-image: linear-gradient(to right, ${color} 100%, ${color} 0%);
  background-position: 0 ${position}em;
  background-repeat: repeat-x;
  background-size: 1px 1px;
`