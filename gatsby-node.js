const _ = require('lodash')
const path = require(`path`)
const slash = require(`slash`)

const LocaleAbbreviations = {
  ru: 'ru',
  'en-US': 'en' 
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`{
      allContentfulAnimationPage {
        edges {
          node {
            slug
            node_locale
          }
        }
      }
    }`).then(({ err, data }) => {
      if (err) { reject(err) }

      const animationsTemplate = path.resolve(`./src/templates/animation.tsx`)

      _.each(data.allContentfulAnimationPage.edges, ({node: {slug, node_locale}}) => {
        createPage({
          path: `/${LocaleAbbreviations[node_locale]}/animation/${slug}`,
          component: slash(animationsTemplate),
          context: {
            slug,
            node_locale
          }
        })
      })

      resolve()
    })
  })
}