import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Globals/Hero"
import HeroText from "../components/Globals/HeroText"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroText />
    <Hero img={data.img.childImageSharp.fluid} styleClass="default-hero" />
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
  }
`

export default IndexPage
