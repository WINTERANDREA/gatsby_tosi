/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {} from "gatsby"

import "./layout.css"
import Navbar from "./Globals/Navbar"
import Hero2 from "./Globals/Hero2"

const Layout = ({ children }) => <>{children}</>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
