import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.jpg"

const HeroTextRight = ({ title, subtitle }) => {
  return (
    <div className="heroTextRight">
      <Link to="/gorgonzolaBar">
        <h1 className="rightText">GORGONZOLA BAR</h1>
      </Link>

      {/*  <Link to="/CaseificioPage" className="navbar-brand">
        <img style={{ maxWidth: 70 }} src={logo} alt="logo" />
        <h1 className="title text-uppercase text-center font-weight-bold text-green">
          {title}
        </h1>
        <h3 className="subtitle text-green text-center">{subtitle}</h3>
      </Link> */}
    </div>
  )
}

HeroTextRight.defaultProps = {
  title: "TOSI",
  subtitle: "Produzione artigianale Gorgonzola DOP dal 1960",
}

export default HeroTextRight
