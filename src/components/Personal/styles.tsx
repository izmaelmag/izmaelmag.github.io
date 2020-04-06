import styled from 'styled-components'
import { SansSerif, Colors } from 'constants/Styles'

export const Personal$ = styled.div`
  ${SansSerif}
  display: flex;
  flex-direction: row;
  color: ${Colors.Black(80)};
`

export const Photo$ = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
  overflow: hidden;
  background: ${Colors.Black(10)};

  img {
    display: block;
    height: 100%;
  }
`

export const Info$ = styled.div`
  margin-left: 16px;
  margin-top: 32px;
`

export const Name$ = styled.h1`
  line-height: 1;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 4px;
`

export const Position$ = styled.h2`
  font-size: 10px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
`