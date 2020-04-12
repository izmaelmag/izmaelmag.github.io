import styled from 'styled-components'
import { UnderlineText, CSSProps } from 'constants/Styles'

export const SocialLinks$ = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
`

export const SocialLink$ = styled.a`
  font-size: 12px;
  line-height: 1.5;
  font-weight: 500;
  margin-right: 16px;
  position: relative;
  ${UnderlineText({ color: CSSProps.link.underline, position: 1.3 })}

  &:hover {
    ${UnderlineText({ color: CSSProps.link.hover.underline, position: 1.3 })}
  }

  &::after {
    content: '•';
    position: absolute;
    display: inline;
    right: -10px;
    color: ${CSSProps.link.hover.underline};
    pointer-events: none;
  }

  &:last-child::after {
    display: none;
  }
`