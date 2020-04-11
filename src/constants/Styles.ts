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
  White: (opaque: number = 100) => `rgba(255, 255, 255, ${opaque * 0.01})`,
  Blue: (opaque: number = 100) => `rgba(0, 166, 200, ${opaque * 0.01})`,
  Gray100: '#FAFAFA'
}

export const CSSColorsNames = {
  background: '--colors-background',
  text: '--colors-text',
  link: {
    text: '--colors-link',
    underline: '--colors-link-underline',
    hover: {
      text: '--colors-link-hover',
      underline: '--colors-link-hover-underline'
    },
  }
}

export const DarkCSSColors = css`
  --colors-background: ${Colors.Black(90)};
  --colors-text: ${Colors.White(90)};
  --colors-link: ${Colors.Blue()};
  --colors-link-hover: ${Colors.Blue()};
  --colors-link-underline: ${Colors.Blue(15)};
  --colors-link-hover-underline: ${Colors.Blue(70)};
`

export const LightCSSColors = css`
  --colors-background: ${Colors.Gray100};
  --colors-text: ${Colors.Black(85)};
  --colors-link: ${Colors.Blue()};
  --colors-link-hover: ${Colors.Blue()};
  --colors-link-underline: ${Colors.Blue(15)};
  --colors-link-hover-underline: ${Colors.Blue(70)};
`

export const UnderlineText = ({
  color = 'currentColor',
  position = 1.04
}: UnderlineTextOptsT) => css`
  background-image: linear-gradient(to right, ${color} 100%, ${color} 0%);
  background-position: 0 ${position}em;
  background-repeat: repeat-x;
  background-size: 1px 1px;
`