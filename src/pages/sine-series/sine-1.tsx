import React from 'react'
import { ThemeNames } from 'constants/Themes'
import { PageLayout } from 'layouts/PageLayout'

const SineSeries1: React.StatelessComponent = () => {
  return (
    <PageLayout layoutTheme={ThemeNames.dark} title='Sine series'>
      <h1>Sine 1</h1>
    </PageLayout>
  )
}

export default SineSeries1