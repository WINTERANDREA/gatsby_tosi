import React from "react"
import Product2 from "./Product2"
import { StaticQuery, graphql } from "gatsby"

const getProducts2 = graphql`
  {
    list: allContentfulProdotti {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(height: 400) {
              src
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products2 = props => {
  return (
    <div>
      <StaticQuery
        query={getProducts2}
        render={data => {
          return (
            <section className="py-5">
              <div className="container">
                <h5 className="text-center mb-5 text-green">
                  VETRINA TEST TELEFONO
                </h5>
                <div className="row">
                  {data.list.edges.map(({ node: product }) => (
                    <Product2 key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          )
        }}
      />
    </div>
  )
}

export default Products2
