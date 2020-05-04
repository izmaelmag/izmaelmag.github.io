import React from 'react'
import { graphql } from 'gatsby'
import CommonLayout from 'layouts/Common'
import PageTitle from 'components/PageTitle'

interface AnimationTemplatePropsI {
  data: ContentfulAnimationPageI
}

const AnimationTemplate: React.FunctionComponent<AnimationTemplatePropsI> = (props) => {
  const { title, tags, preview } = props.data.page

  console.log(props)

  return (
    <CommonLayout>
      <PageTitle imageSrc={preview.resolutions.src} title={title} subtitle={tags} />
    </CommonLayout>
  )
}

export default AnimationTemplate

export const PageData = graphql`
  query AnimationPage($slug: String!, $node_locale: String!) {
    page: contentfulAnimationPage(slug: {eq: $slug}, node_locale: {eq: $node_locale}) {
      description {
        content {
          content {
            value
          }
        }
      }
      slug
      tags
      title
      updatedAt(fromNow: true, locale: $node_locale)
      preview {
        resolutions {
          src
        }
      }
    }
  }  
`