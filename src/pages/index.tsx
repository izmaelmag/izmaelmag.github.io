import React from 'react'
import { graphql, navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n'

interface IndexPropsI {
  data: {
    site: {
      siteMetadata: {
        languages: {
          availableLanguages: string[],
          defaultLanguage: string
        }
      }
    }
  }
}

const RedirectIndex: React.FunctionComponent<IndexPropsI> = ({ data }) => {
  if (typeof window !== 'undefined') {
    const { availableLanguages, defaultLanguage } = data.site.siteMetadata.languages;
    const langKey = getUserLangKey(availableLanguages, defaultLanguage);
    const homeUrl = withPrefix(`/${langKey}/`);

    navigate(homeUrl);
  }

  return (
    <h1>Index page</h1>
  )
}

export default RedirectIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata{
        languages {
          defaultLanguage
          availableLanguages
        }
      }
    }
  }
`;