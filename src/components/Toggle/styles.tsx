import styled from 'styled-components'
import { Colors, darkMedia, CSSProps } from 'constants/Styles'

export const ToggleWrapper$ = styled.div`
  display: flex;
  align-items: center;
`

export const Toggle$ = styled.button`
  position: relative;
  width: 48px;
  height: 24px;
  padding: 4px;
  border: none;
  border-radius: 14px;
  background: ${Colors.Black(20)};
  cursor: pointer;

  @media (${darkMedia}) {
    background: ${Colors.White(20)};
  }
`

export const Pin$ = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  transform: translateX(${({ theme }) => theme.isActive ? 24 : 0}px);
  background: ${({ theme }) => theme.isActive ? Colors.Blue() : Colors.Black(60)};
  transition: all .3s cubic-bezier(.8, 0, .2, 1);

  @media (${darkMedia}) {
    background: ${({ theme }) => theme.isActive ? Colors.Blue() : Colors.White(60)};
  }
`

export const Label$ = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${CSSProps.text};
  margin-right: 8px;
`