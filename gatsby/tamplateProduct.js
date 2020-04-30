
const replacePath = require('./utils')
const path = require("path")

module.exports = exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve(`src/templates/productTemplate.js`)

    return graphql(
       `query  {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                    }
                }
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: replacePath(node.fields.slug),
                component: postTemplate,
                context: {}, // additional data can be passed via context
            })
        })
    })
}
