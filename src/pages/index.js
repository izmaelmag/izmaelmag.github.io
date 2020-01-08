import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <ul>
      <li>
        <Link to="/demos/css-filter-goo/">Goo Animation</Link>
      </li>
      <li>
        <Link to="/demos/mobile-layout/">Mobile Layout</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
