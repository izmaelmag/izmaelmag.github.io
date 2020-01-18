import React from 'react'
import styled from 'styled-components'
import { PageLayout } from 'layouts/PageLayout'
import { ThemeNames } from 'constants/Themes'
import { SquareGrid, Cell } from 'components/SquareGrid'

const SineSeries = () => {
  return(
    <PageLayout layoutTheme={ThemeNames.dark} title='Sine series'>
      <SquareGrid gap={32}>
        <Cell linkTo='sine-series/sine-1'>1</Cell>
        <Cell linkTo=''>2</Cell>
        <Cell linkTo=''>3</Cell>
        <Cell linkTo=''>4</Cell>
      </SquareGrid>
    </PageLayout>
  )
}

export default SineSeries

const CellContent$ = styled.button`

`