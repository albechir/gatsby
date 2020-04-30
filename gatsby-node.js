/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

//exports.createPages = require('./gatsby/createPages')
//exports.onCreateNode = require('./gatsby/onCreateNode')
//  exports.createPages = async  ({actions, graphql}){

//}

exports.createPages = async function ({actions, graphql}) {

    const products = await graphql(
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
`
    )

    products.data.allMarkdownRemark.edges.forEach( edge => {
        const path = edge.node.frontmatter.path;
        actions.createPage({
            path: path,
            component: require.resolve('./src/templates/productTemplate'),
            context: {path:path}
        })
    })


}

