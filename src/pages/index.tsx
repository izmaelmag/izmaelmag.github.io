import React from 'react'
import styled from 'styled-components'
import CommonLayout from 'layouts/Common'
import PageTitle from 'components/PageTitle'
import SocialLinks from 'components/SocialLinks'
import Media from 'utils/Media'
import { useStaticQuery, graphql } from "gatsby"
import MarkedText from "components/MarkedText"
import keysToArray from "utils/keysToArray"

const IndexPage = () => {
  const { contentfulPerson: {
    name,
    position,
    shortBio,
    image,
    github,
    email,
    cv,
    twitter,
    instagram
  } }: ContentfulPersonT = useStaticQuery(
    graphql`
      query AnotherOne {
        contentfulPerson(node_locale: {eq: "ru"}) {
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
  )

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

        <SocialLinks links={keysToArray({
          object: { github, email, cv, twitter, instagram },
          keyName: 'title',
          valueName: 'url'
        })}/>

        <Info$>
          <MarkedText markdownContent={shortBio.shortBio} />
        </Info$>
      </Page$>
    </CommonLayout>
  )
}

export default IndexPage

// Styled wrappers
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

const Info$ = styled.main`
  max-width: 540px;
  margin-top: 24px;
`