import styled from 'styled-components'
import { Colors, Easings } from 'constants/Styles'

export const ToggleWrapper$ = styled.div`
  display: flex;
  align-items: center;
`

export const Toggle$ = styled.button`
  position: relative;
  width: ${({ theme }) => theme.withText ? 62 : 48}px;
  height: 24px;
  padding: 4px;
  border: none;
  border-radius: 14px;
  background: ${Colors.CSS.gray10};
  cursor: pointer;
`

export const Pin$ = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: ${({ theme }) => theme.withText ? 32 : 18}px;
  height: 18px;
  border-radius: 9px;
  transform: translateX(${({ theme }) => theme.isActive ? 24 : 0}px);
  background: ${({ theme }) => theme.isActive ? Colors.CSS.bg : Colors.CSS.gray60};
  transition: all .15s ${Easings.quadratic};
  text-transform: uppercase;
  line-height: 18px;
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.isActive ? Colors.CSS.blue : Colors.CSS.bg};
  box-shadow: 0 0 0 ${({ theme }) => theme.isActive ? 2 : 0}px ${Colors.CSS.blue} inset;
`

export const Label$ = styled.span`
  font-size: 12px;
  color: ${Colors.CSS.text};
  margin-right: 8px;
`

export const Icon$ = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 2px;
  left: 3px;

  svg {
    width: 100%;
    height: 100%;
  }
`