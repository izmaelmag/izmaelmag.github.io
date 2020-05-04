import React from 'react'
import CommonLayout from 'layouts/Common'
import SocialLinks from 'components/SocialLinks'
import keysToArray from 'utils/keysToArray'
import PageTitle from 'components/PageTitle'
import { LocalesT } from 'constants/Locales'
// import Toggle from 'components/Toggle'
// import MoonIcon from 'images/svg/moon.svg'
// import PostPreview from 'components/PostPreview'
import LocaleSwitcher from 'components/LocaleSwitcher'
import MarkedText from 'components/MarkedText'
import {
  Page$,
  Content$,
  MainHeader$,
  Navigation$,
  Info$,
  // Articles$
} from './styles'

interface IndexPropsI {
  person: ContentfulPersonI["person"],
  locale: LocalesT
}

const IndexLayout = (props: IndexPropsI) => {
  const { name, position, shortBio, image, github, email, cv, twitter, instagram } = props.person

  return (
    <CommonLayout>
      <Page$>
        <Content$>
          <MainHeader$>
            <PageTitle
              locale={props.locale}
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

          {/* <Articles$>
            <PostPreview
              title='Testqd qw qwd qwefqwe qwe   title'
              tags={['tag1', 'tag2']}
              imageSrc='jjhwekfjqkef'
              imageSrcSet='jjhwekfjqkef'
              url='qlfqlkwjeflqjw'
            />
            <PostPreview
              title='Test title'
              tags={['tag1', 'tag2']}
              imageSrc='jjhwekfjqkef'
              imageSrcSet='jjhwekfjqkef'
              url='qlfqlkwjeflqjw'
            />
          </Articles$> */}

          <Info$>
            <MarkedText markdownContent={shortBio.shortBio} />
          </Info$>
        </Content$>
      </Page$>
    </CommonLayout>
  )
}

export default IndexLayout
