import { useStaticQuery, graphql } from 'gatsby'

const usePersonDataRu = (): ContentfulPersonI => useStaticQuery(graphql`
  query PersonDataRu {
    person: contentfulPerson(node_locale: {eq: "ru"}) {
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

export default usePersonDataRu