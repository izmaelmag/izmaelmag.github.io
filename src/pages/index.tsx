import React from 'react'
import styled from 'styled-components'
import CommonLayout from 'layouts/Common'
import PageTitle from 'components/PageTitle'
import SocialLinks from 'components/SocialLinks'
import Media from 'utils/Media'
import MarkedText from "components/MarkedText"
import keysToArray from "utils/keysToArray"
import { graphql } from 'gatsby'
import { Colors } from 'constants/Styles'
import PostPreview from 'components/PostPreview'
import Toggle from 'components/Toggle'
import MoonIcon from 'images/svg/moon.svg'

interface IndexPagePropsI {
  data: ContentfulPersonT
}

const IndexPage: React.FunctionComponent<IndexPagePropsI> = ({ data }) => {
  const { name, position, shortBio, image, github, email, cv, twitter, instagram } = data.contentfulPerson

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

          <Toggle state={true} label='Dark scheme' onChange={console.log}>
            <MoonIcon />
          </Toggle>
        </Navigation$>

        <Articles$>
          <PostPreview
            title='Test title'
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
          <PostPreview
            title='Test title'
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
          <PostPreview
            title='Test title'
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
        </Articles$>

        <Info$>
          <MarkedText markdownContent={shortBio.shortBio} />
        </Info$>
      </Page$>
    </CommonLayout>
  )
}

export default IndexPage

export const query = graphql`
  query PersonData {
    contentfulPerson(node_locale: {eq: "en-US"}) {
      name
      position
      shortBio {
        shortBio
      }
      image {
        resolutions(width: 64, toFormat: WEBP) {
          srcSet
          src
        }
      }
      github
      email
      cv
      twitter
      instagram
    }
  }
`

//#region Styled wrappers
const Page$ = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 32px 112px;
  margin: 0px;
  display: flex;
  flex-direction: column;

  ${Media.Phone`
    padding: 24px 20px;
  `}
`

const MainHeader$ = styled.div`
  margin-bottom: 12px;
  transform: translateX(-80px);

  ${Media.Phone`
    transform: translateX(0px);
  `}
`

const Navigation$ = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info$ = styled.main`
  max-width: 640px;
  margin-top: 24px;
`

const Articles$ = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 24px 0;
  margin: 10px 0 16px;
  border-top: 1px solid ${Colors.CSS.gray10};
  border-bottom: 1px solid ${Colors.CSS.gray10};
`
//#endregion