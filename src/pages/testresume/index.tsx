import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Link$ = styled(Link)`
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
`

import SEO from 'components/seo'

const TestPage = () => (
  <div>
    <SEO title="Home" meta={[
      {
        name: 'twitter:player',
        content: 'http://resume.test/r/iK0JcbZgT'
      },
      {
        name: 'twitter:player:width',
        content: '800'
      },
      {
        name: 'twitter:player:height',
        content: '450'
      },
    ]}/>

    <h1>Test</h1>
  </div>
)

export default TestPage
