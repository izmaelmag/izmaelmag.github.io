import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import CommonLayout from 'layouts/Common'
import PageTitle from 'components/PageTitle'

interface AnimationTemplatePropsI {
  data: ContentfulAnimationPageI
}

const AnimationTemplate: React.FunctionComponent<AnimationTemplatePropsI> = (props) => {
  const { title, tags } = props.data.page

  return (
    <CommonLayout>
      <PageTitle title={title} subtitle={tags} />

      <SketchFrame$>
        {/* <P5Sketch sketch={sketches[sketchIndex](settings)} /> */}
      </SketchFrame$>
    </CommonLayout>
  )
}

export default AnimationTemplate

const SketchFrame$ = styled.div`
  margin-top: 32px;
  width: 512px;
  height: 512px;
`

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
    }
  }  
`