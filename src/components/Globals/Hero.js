import React from "react"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ img, styleClass, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      {children}
    </BackgroundImage>
  )
}

Hero.defaultProps = {
  styleClass: "default-hero",
}

export default Hero
