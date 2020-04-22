import React from 'react'
import {
  PageTitle$,
  Photo$,
  Info$,
  Title$, 
  Subtitle$
} from './styles'

interface PageTitlePropI {
  imageSrc?: string,
  imageSrcSet?: string,
  title: string,
  subtitle: string
}

const PageTitle: React.FunctionComponent<PageTitlePropI> = ({
  imageSrc, imageSrcSet, title, subtitle
}) => {
  const hasPhoto = imageSrc || imageSrcSet
  return (
    <PageTitle$>
      {hasPhoto && (
        <Photo$>
          <img srcSet={imageSrcSet} src={imageSrc} alt={title} />
        </Photo$>
      )}
  
      <Info$>
        <Title$>{ title }</Title$>
        <Subtitle$>{ subtitle }</Subtitle$>
      </Info$>
    </PageTitle$>
  )
}

export default PageTitle