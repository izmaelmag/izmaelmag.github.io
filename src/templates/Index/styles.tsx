import styled from 'styled-components'
import Media from 'utils/Media'
import { Colors } from 'constants/Styles'
import { LocaleSwitcher$ } from 'components/LocaleSwitcher/styles'

//#region Styled wrappers
export const Page$ = styled.div`
  width: 100%;
  padding: 0 80px;
  margin: 0px;
  display: flex;
  flex-direction: column;

  ${Media.Phone`
    padding: 0;
  `}
`

export const Content$ = styled.main`
  max-width: 640px;
`

export const MainHeader$ = styled.div`
  margin-bottom: 12px;
  transform: translateX(-80px);

  ${Media.Phone`
    transform: translateX(0px);
  `}
`

export const Navigation$ = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Media.Phone`
    flex-direction: column;
    align-items: flex-start;
  `}

  ${LocaleSwitcher$} {
    ${Media.Phone`
      margin-top: 20px;
    `}
  }
`

export const Info$ = styled.main`
  max-width: 640px;
  margin-top: 24px;
`

export const Articles$ = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(50% - 16px), auto));
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 24px 0;
  margin: 10px 0 16px;
  border-top: 1px solid ${Colors.CSS.gray10};
  border-bottom: 1px solid ${Colors.CSS.gray10};
`
//#endregion