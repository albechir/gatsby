import productTemplate from "../src/templates/productTemplate";

const replacePath = require('./utils')
const path = require("path")

module.exports = exports.TamplateProduct = ({ actions, graphql }) => {
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
                component: productTemplate,
                context: {}, // additional data can be passed via context
            })
        })
    })
}
