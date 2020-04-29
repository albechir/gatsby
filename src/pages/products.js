 import React from "react"
import { graphql } from 'gatsby'

export const query = graphql`
    query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          showTitle
          sidebar
        }
      }
    }
  }
}

`

const Products = ({data}) => {
    console.log(data);
    return (
        <table>
        <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Description</th>
        <th>Preview</th>

        </tr>

    {
        data.allMarkdownRemark.edges.map((product) => {
            return <tr>
            <td>{product.node.frontmatter.title}</td>
            <td>{product.node.frontmatter.showTitle} €</td>
            <td>{product.node.frontmatter.sidebar}</td>
            <td><img src="" alt=""/></td>
                </tr>
        })
    }
</table>
)
}

Products.propTypes = {}

export default Products
