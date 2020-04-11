import { css } from 'styled-components'

export const SansSerif = css`
  font-family: 'Montserrat', sans-serif;
`

export const Colors = {
  Black: (opaque: number = 100) => `rgba(0, 0, 0, ${opaque * 0.01})`,
  White: (opaque: number = 100) => `rgba(255, 255, 255, ${opaque * 0.01})`,
  Blue: (opaque: number = 100) => `rgba(0, 166, 200, ${opaque * 0.01})`,
  Gray100: '#FAFAFA'
}

export const CSSColorNames = {
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

export const CSSProps = {
  background: `var(${CSSColorNames.background})`,
  text: `var(${CSSColorNames.text})`,
  link: {
    text: `var(${CSSColorNames.link.text})`,
    underline: `var(${CSSColorNames.link.underline})`,
    hover: {
      text: `var(${CSSColorNames.link.hover.text})`,
      underline: `var(${CSSColorNames.link.hover.underline})`
    },
  }
}


export const CSSColorSchemes = css`
  @media (prefers-color-scheme: dark) {
    ${CSSColorNames.background}:
     ${Colors.Black(90)};

    ${CSSColorNames.text}:
      ${Colors.White(90)};
    
    ${CSSColorNames.link.text}:
      ${Colors.Blue()};
    ${CSSColorNames.link.hover.text}:
      ${Colors.Blue()};

    ${CSSColorNames.link.underline}:
      ${Colors.Blue(15)};
    ${CSSColorNames.link.hover.underline}:
      ${Colors.Blue(70)};
  }

  ${CSSColorNames.background}:
    ${Colors.Gray100};
  ${CSSColorNames.text}:
    ${Colors.Black(85)};
  
  ${CSSColorNames.link.text}:
    ${Colors.Blue()};
  ${CSSColorNames.link.hover.text}:
    ${Colors.Blue()};
  
  ${CSSColorNames.link.underline}:
    ${Colors.Blue(15)};
  ${CSSColorNames.link.hover.underline}:
    ${Colors.Blue(70)};
`

type UnderlineTextOptsT = {
  color?: string,
  position?: number
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