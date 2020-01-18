import { css } from 'styled-components'

const BreakPoints = {
  Phone: 767,
  Tablet: 1023,
  Laptop: 1279,
}

const Media = {
  Phone: (args: TemplateStringsArray) => {
    console.log(args)
    return css`
    @media (max-width: ${BreakPoints.Phone}px) {
      ${args[0]}
    }
  `},

  Tablet: (args: TemplateStringsArray) => css`
    @media (max-width: ${BreakPoints.Tablet}) {
      ${args};
    }
  `,

  Laptop: (args: TemplateStringsArray)=> css`
    @media (max-width: ${BreakPoints.Laptop}px) {
      ${args};
    }
  `,

  Desktop: (args: TemplateStringsArray)=> css`
    @media (min-width: ${BreakPoints.Laptop+1}px) {
      ${args};
    }
  `,
}

export default Media