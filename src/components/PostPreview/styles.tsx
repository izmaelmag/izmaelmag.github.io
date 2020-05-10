import styled from 'styled-components'
import { Colors } from 'constants/Styles'

export const PostPreview$ = styled.article`
  display: flex;
  align-items: flex-end;
  position: relative;
`

export const Image$ = styled.div`
  width: 80px;
  height: 64px;
  border-radius: 6px;
  overflow: hidden;
  object-fit: cover;
  margin-right: 10px;
  flex-shrink: 0;
  background-color: ${Colors.CSS.bg};
  box-shadow: -4px -2px 10px ${Colors.White()}, 4px 2px 10px ${Colors.Black(10)};
`

export const Tags$ = styled.div`
  font-size: 8px;
  line-height: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${Colors.CSS.gray80};
`

export const Title$ = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 800;
  color: ${Colors.CSS.blue};
  padding-bottom: 4px;
  margin-top: 4px;

  a::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`