import { useStaticQuery, graphql } from 'gatsby'

const useAnimationsList = (): ContentfulAnimationPagesListI => useStaticQuery(graphql`
  query AnimationPages {
    pagesList: allContentfulAnimationPage(filter: {node_locale: {eq: "en-US"}}) {
      pages: edges {
        node {
          slug
          tags
          title
          preview {
            resolutions {
              src
            }
          }
        }
      }
    }
  }
`)

export default useAnimationsList