import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.jpg"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
  const [state, setNavState] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  })
  const navbarHandler = () => {
    state.navbarOpen
      ? setNavState(prev => {
          return { ...prev, navbarOpen: false, css: "collapse navbar-collapse" }
        })
      : setNavState(prev => {
          return {
            ...prev,
            navbarOpen: true,
            css: "collapse navbar-collapse show",
          }
        })
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img style={{ maxWidth: 70 }} src={logo} alt="logo" />
      </Link>

      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={state.css}>
        <ul className="navbar-nav mx-auto">
          {state.links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5 ">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
