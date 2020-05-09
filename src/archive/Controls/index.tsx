import styled from 'styled-components'
import Media from 'utils/Media'

export const Controls$ = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 512px;

  ${Media.Phone`
    width: 100%;
    flex-direction: column;
  `}
`

export const ControlGroup$ = styled.div`
  width: 240px;
  margin: 10px 0 0;
  display: flex;
  align-items: center;

  input {
    display: block;
    flex: 1 0;
  }

  ${Media.Phone`
    width: 100%;
  `}
`