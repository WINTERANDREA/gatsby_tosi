import React from "react"
import { graphql, Link } from "gatsby"

import HeroTextLeft from "../components/Globals/HeroTextLeft"
import Layout from "../components/layout"

const CaseificioPage = ({ data }) => (
  <Layout>
    <Link to="/"> &#8592;Torna all'Homepage</Link>
    <div
      style={{
        height: "100vh",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>PAGINE CASEIFICIO TOSI</h1>
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "sfondo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    imgHeroBar: file(relativePath: { eq: "bar.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    tassello: file(relativePath: { eq: "tassello.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
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
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default CaseificioPage
