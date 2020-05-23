import styled from 'styled-components'
import { Colors } from 'constants/Styles'
import Media from 'utils/Media'

export const Layout$ = styled.div`
  width: 280px;
  background: ${Colors.Black(70)};
  border: 1px solid ${Colors.CSS.gray20};

  ${Media.Phone`
    width: 100%;
  `}
`

export const SettingsHeader$ = styled.button`
  width: 100%;
  border: none;
  background: ${Colors.CSS.gray10};
  color: ${Colors.CSS.text};
  padding: 8px 12px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const SettingsControls$ = styled.div`
  display: ${({ theme }) => theme.showControls ? 'block' : 'none'};
  overflow: auto;
  max-height: 420px;
  padding: 12px;


  ${Media.Phone`
    max-height: 250px;
  `}
`

export const SettingsItem$ = styled.div`
  margin-bottom: 16px;
`