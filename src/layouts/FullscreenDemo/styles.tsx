import styled from 'styled-components'
import { Colors } from 'constants/Styles'
import Media from 'utils/Media'

interface CornerProsI {
  top?: boolean,
  bottom?: boolean, 
  left?: boolean, 
  right?: boolean
}

const gap = 24

export const Layout$ = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: ${Colors.CSS.bg};

  ${Media.Phone`
    height: 100%;
  `}
`

export const Interface$ = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;

  ${Media.Phone`
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    padding: 16px;
  `}
`

export const Corner$ = styled.div`
  position: absolute;
  top: ${(props: CornerProsI) => props.top ? `${gap}px` : 'auto'};
  bottom: ${(props: CornerProsI) => props.bottom ? `${gap}px` : 'auto'};
  left: ${(props: CornerProsI) => props.left ? `${gap}px` : 'auto'};
  right: ${(props: CornerProsI) => props.right ? `${gap}px` : 'auto'};
  pointer-events: all;

  ${Media.Phone`
    position: relative;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
  `}
`

export const Content$ = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`