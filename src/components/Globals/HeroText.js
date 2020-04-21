import React from "react"

const HeroText = ({ title, subtitle }) => {
  return (
    <div className="container">
      <h1 className="title text-uppercase text-center font-weight-bold text-green">
        {title}
      </h1>
      <h3 className="subtitle text-green text-center">{subtitle}</h3>
    </div>
  )
}

HeroText.defaultProps = {
  title: "TOSI",
  subtitle: "Produzione artigianale Gorgonzola DOP dal 1960",
  styleClass: "default-hero",
}

export default HeroText
