import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Globals/Hero"
import HeroText from "../components/Globals/HeroText"
import Product from "../components/Home/Product"
import Products2 from "../components/Home/Products2"
import Contact from "../components/Home/Contact"
import Hero2 from "../components/Globals/Hero2"
import Navbar from "../components/Globals/Navbar"
import HeroTextLeft from "../components/Globals/HeroTextLeft"

const TosiShop = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Hero img={data.img.childImageSharp.fluid} styleClass="default-hero" />
    <Product items={data.list} />
    <Products2 />
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

export default TosiShop
