import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Link to="/demos/css-filter-goo/">Goo Animation</Link>
  </div>
)

export default IndexPage
