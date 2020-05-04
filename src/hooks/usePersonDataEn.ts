import { useStaticQuery, graphql } from 'gatsby'

const usePersonDataEn = (): ContentfulPersonI => useStaticQuery(graphql`
  query PersonDataEn {
    person: contentfulPerson(node_locale: {eq: "en-US"}) {
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
`)

export default usePersonDataEn