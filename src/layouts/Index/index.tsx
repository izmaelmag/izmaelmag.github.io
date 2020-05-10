import React from 'react'
import { Link } from 'gatsby'
import CommonLayout from 'layouts/Common'
import SocialLinks from 'components/SocialLinks'
import keysToArray from 'utils/keysToArray'
import PageTitle from 'components/PageTitle'
import MarkedText from 'components/MarkedText'
import PostPreview from 'components/PostPreview'
import {
  Page$,
  Content$,
  MainHeader$,
  Navigation$,
  Info$,
  Pages$,
  Heading$
} from './styles'

interface IndexPropsI {
  person: ContentfulPersonI["person"],
  animations?: ContentfulAnimationPagesListI["pagesList"]["pages"]
}

const IndexLayout = (props: IndexPropsI) => {
  const { name, position, shortBio, image, github, email, cv, twitter, instagram } = props.person

  console.log(props)

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
            <Heading$>About me</Heading$>
            <MarkedText markdownContent={shortBio.shortBio} />
          </Info$>

          {props.animations && (
            <Pages$>
              <Heading$>Animations</Heading$>
              { props.animations.map(({ node }) => (
                <PostPreview
                  imageSrc={node.preview.resolutions.src}
                  title={node.title}
                  url={`sketches/${node.slug}`}
                  tags={node.tags.split(' ')}
                />
              ))}
            </Pages$>  
          )}
        </Content$>
      </Page$>
    </CommonLayout>
  )
}

export default IndexLayout
