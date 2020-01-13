import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Link$ = styled(Link)`
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
`

import SEO from 'components/seo'

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <ul>
      <li>
        <Link$ to="/demos/css-filter-goo/">Goo Animation</Link$>
      </li>
    </ul>
  </div>
)

export default IndexPage
