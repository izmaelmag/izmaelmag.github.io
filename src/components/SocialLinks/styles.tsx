import styled from 'styled-components'
import { UnderlineText, Colors } from 'constants/Styles'

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
  ${UnderlineText({ color: Colors.CSS.blue20, position: 1.3 })}

  &:hover {
    ${UnderlineText({ color: Colors.CSS.blue60, position: 1.3 })}
  }

  &::after {
    content: '•';
    position: absolute;
    display: inline;
    right: -10px;
    color: ${Colors.CSS.blue60};
    pointer-events: none;
  }

  &:last-child::after {
    display: none;
  }
`