import React from 'react'
import { LocalesT } from 'constants/Locales'
import LocaleSwitcher from 'components/LocaleSwitcher'
import { PageTitle$, Photo$, Info$, Title$,  Subtitle$ } from './styles'

interface PageTitlePropI {
  imageSrc?: string,
  imageSrcSet?: string,
  title: string,
  subtitle: string,
  locale: LocalesT
}

const PageTitle: React.FunctionComponent<PageTitlePropI> = ({
  imageSrc, imageSrcSet, title, subtitle, locale
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
        <LocaleSwitcher locale={locale} />
        <Title$>{ title }</Title$>
        <Subtitle$>{ subtitle }</Subtitle$>
      </Info$>
    </PageTitle$>
  )
}

export default PageTitle