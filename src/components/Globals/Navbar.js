import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.jpg"
import { FaCartArrowDown } from "react-icons/fa"
import { FaHamburger } from "react-icons/fa"
import { FcShop } from "react-icons/fc"
import { FaCheese } from "react-icons/fa"
import { IoIosBasket } from "react-icons/io"

const Navbar = () => {
  const [state, setNavState] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/caseificio",
        text: "Caseificio",
      },
      {
        id: 2,
        path: "/gorgonzolaBar",
        text: "Gorgonzola Bar",
      },
      {
        id: 3,
        path: "/tosiShop",
        text: "Shop",
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
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img style={{ maxWidth: 70 }} src={logo} alt="logo" />
      </Link>

      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <FaCheese className="hamburger-icon" />
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
          <li className="nav-item">
            <IoIosBasket className="cart-icon snipcart-checkout" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
