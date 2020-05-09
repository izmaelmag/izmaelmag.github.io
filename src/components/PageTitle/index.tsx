import React from 'react'
import { PageTitle$, Photo$, Info$, Title$,  Subtitle$ } from './styles'
import { ThemeProvider } from 'styled-components'

interface PageTitlePropI {
  imageSrc?: string,
  imageSrcSet?: string,
  title: string,
  subtitle?: string,
}

const PageTitle: React.FunctionComponent<PageTitlePropI> = ({
  imageSrc, imageSrcSet, title, subtitle
}) => {
  const hasPhoto = imageSrc || imageSrcSet
  return (
    <ThemeProvider theme={{ hasPhoto }}>
      <PageTitle$>
        {hasPhoto && (
          <Photo$>
            <img srcSet={imageSrcSet} src={imageSrc} alt={title} />
          </Photo$>
        )}
    
        <Info$>
          <Title$>{ title }</Title$>
          {subtitle && <Subtitle$>{ subtitle }</Subtitle$>}
        </Info$>
      </PageTitle$>
    </ThemeProvider>
  )
}

export default PageTitle