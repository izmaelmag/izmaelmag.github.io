import { css } from 'styled-components'
import Media from 'utils/Media'

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

export const CSSColors = css`
  @media (prefers-color-scheme: dark) {
    ${CSSColorsNames.background}:
     ${Colors.Black(90)};

    ${CSSColorsNames.text}:
      ${Colors.White(90)};
    
    ${CSSColorsNames.link.text}:
      ${Colors.Blue()};
    ${CSSColorsNames.link.hover.text}:
      ${Colors.Blue()};

    ${CSSColorsNames.link.underline}:
      ${Colors.Blue(15)};
    ${CSSColorsNames.link.hover.underline}:
      ${Colors.Blue(70)};
  }

  ${CSSColorsNames.background}:
    ${Colors.Gray100};
  ${CSSColorsNames.text}:
    ${Colors.Black(85)};
  
  ${CSSColorsNames.link.text}:
    ${Colors.Blue()};
  ${CSSColorsNames.link.hover.text}:
    ${Colors.Blue()};
  
  ${CSSColorsNames.link.underline}:
    ${Colors.Blue(15)};
  ${CSSColorsNames.link.hover.underline}:
    ${Colors.Blue(70)};

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