import React from "react"
import BackgroundImage from "gatsby-background-image"
import HeroTextLeft from "./HeroTextLeft"
import HeroTextRight from "./HeroTextRight"

const Hero2 = ({ children, styleClass, img, imgLeft, imgRight }) => {
  return (
    <section className="hero2">
      <BackgroundImage className={styleClass} fluid={imgRight}>
        {<HeroTextLeft />}
      </BackgroundImage>

      <BackgroundImage className={styleClass} fluid={imgLeft}>
        <HeroTextRight />
      </BackgroundImage>
    </section>
  )
}

export default Hero2
