import React from 'react'
import CommonLayout from 'layouts/Common'
import SocialLinks from 'components/SocialLinks'
import keysToArray from 'utils/keysToArray'
import PageTitle from 'components/PageTitle'
import MarkedText from 'components/MarkedText'
import {
  Page$,
  Content$,
  MainHeader$,
  Navigation$,
  Info$,
  Heading$
} from './styles'

interface IndexPropsI {
  person: ContentfulPersonI["person"],
  animations?: ContentfulAnimationPagesListI["pagesList"]["pages"]
}

const IndexLayout = (props: IndexPropsI) => {
  const { name, position, shortBio, image, github, email, cv, twitter, instagram } = props.person

  return (
    <CommonLayout>
      <Page$>
        <MainHeader$>
          <PageTitle
            imageSrc={image.resolutions.src}
            imageSrcSet={image.resolutions.srcSet}
            title={name}
            subtitle={position}
          />
        </MainHeader$>

        <Navigation$>
          <SocialLinks links={keysToArray({
            object: { github, email, cv, twitter, instagram },
            keyName: 'title',
            valueName: 'url'
          })}/>
        </Navigation$>

        <Content$>
          <Info$>
            <MarkedText markdownContent={shortBio.shortBio} />
          </Info$>
        </Content$>
      </Page$>
    </CommonLayout>
  )
}

export default IndexLayout
