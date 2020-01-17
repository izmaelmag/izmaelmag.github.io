import React from 'react'
import styled from 'styled-components'
import Title from 'components/Title'
import { PageLayout } from 'layouts/PageLayout'
import { ThemeNames } from 'constants/Themes'

const SineSeries = () => {
  return(
    <PageLayout layoutTheme={ThemeNames.dark} title='Sine serires' />
  )
}

export default SineSeries