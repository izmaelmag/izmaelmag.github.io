import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Media from 'utils/Media'
import { Link } from 'gatsby'

interface GridProps {
  gap?: number
}

interface CellProps {
  linkTo?: string
}

export const SquareGrid: React.StatelessComponent<GridProps> = ({ gap, children }) => (
  <SquareGrid$ gap={gap}>
    {children}
  </SquareGrid$>
)

export const Cell: React.StatelessComponent<CellProps> = ({ linkTo, children }) => {
  if (linkTo) {
    return (
      <SquareCell$>
        <Link to={linkTo}>
          <SquareCellContent$>
            {children}
          </SquareCellContent$>  
        </Link>
      </SquareCell$>
    )
  }

  return (
    <SquareCell$>
      <SquareCellContent$>
        {children}
      </SquareCellContent$>  
    </SquareCell$>
  )
}

//region Styled
const SquareGrid$: FunctionComponent<GridProps> = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: ${({ gap }: GridProps) => gap}px;
  grid-row-gap: ${({ gap }: GridProps) => gap}px;

  ${Media.Phone`
    grid-template-columns: repeat(2, 1fr);
  `}
`

const SquareCell$ = styled.div`
  position: relative;
  
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const SquareCellContent$ = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
//endregion