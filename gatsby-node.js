const _ = require('lodash')
const path = require(`path`)
const slash = require(`slash`)

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
            contentful_id
            node_locale
          }
        }
      }
    }`).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      const animationsTemplate = path.resolve(`./src/templates/animation.tsx`)

      _.each(data.allContentfulAnimationPage.edges, ({ node: {
        slug,
        contentful_id,
        node_locale
      } }) => {
        createPage({
          path: `/${node_locale}/animation/${slug}`,
          component: slash(animationsTemplate),
          context: {
            slug,
            contentful_id
          }
        })
      })

      resolve()
    })
  })
}