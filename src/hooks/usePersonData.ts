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
        resolutions(width: 128, toFormat: PNG) {
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