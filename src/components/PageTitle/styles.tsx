import styled from 'styled-components'
import { SansSerif, Colors } from 'constants/Styles'
import Media from 'utils/Media'

export const PageTitle$ = styled.div`
  ${SansSerif}
  display: flex;
  flex-direction: row;
  color: ${Colors.CSS.text};
`

export const Photo$ = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 6px;
  overflow: hidden;
  background: ${Colors.CSS.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;

  img {
    display: block;
    height: 100%;
  }

  ${Media.Phone`
    width: 48px;
    height: 48px;
  `}
`

export const Info$ = styled.div`
  margin-top: 0;

  ${Media.Phone`
    margin-left: 8px;
  `}
`

export const Title$ = styled.h1`
  line-height: 1;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 8px;
  margin-top: ${({ theme }) => theme.hasPhoto ? 30 : 0}px;

  ${Media.Phone`
    margin-top: 6px;
    font-size: 24px;
  `}
`

export const Subtitle$ = styled.h2`
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
`