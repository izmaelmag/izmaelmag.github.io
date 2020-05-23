import styled from 'styled-components'
import Media from 'utils/Media'
import { Colors, Typography } from 'constants/Styles'

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
  display: flex;
  flex-direction: row;
  gap: 64px;
  margin-top: 24px;

  ${Media.Phone`
    gap: 32px;
    flex-direction: column-reverse;
  `}
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
`

export const Info$ = styled.main`
  max-width: 560px;
`


export const Pages$ = styled.div`
  display: flex;
  flex-direction: column;

  a {
    align-self: flex-start;
    font-size: 18px;
    line-height: 1.25;
  }

`
export const Heading$ = styled.h4`
  ${Typography.h4};
  margin-bottom: 16px;
  color: ${Colors.CSS.text};

  ${Media.Phone`
    font-size: 18px;
    margin-bottom: 8px;
  `}
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