import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from 'styled-components'
import P5Sketch from 'components/P5Sketch'
import CommonLayout from 'layouts/Common'
import PageTitle from 'components/PageTitle'
import sketches from 'sketches/poly'
import { useStaticQuery, graphql } from 'gatsby'

const SineSeries1: FunctionComponent = () => {
  const { page } = useStaticQuery(graphql`
    query AnimationPage {
      page: contentfulAnimationPage(slug: {eq: "sine-polygons"}, node_locale: {eq: "ru"}) {
        slug
        title
      }
    }
  `)

  return (
    <CommonLayout>
      <PageTitle title={page.title} />

      <SketchFrame$>
        <P5Sketch sketch={sketches[0]({})} />
      </SketchFrame$>
    </CommonLayout>
  )
}

export default React.memo(SineSeries1)

//#region Styled
const SketchFrame$ = styled.div`
  position: relative;
  line-height: 0;
  border-radius: 6px;
  overflow: hidden;
`
//#endregion