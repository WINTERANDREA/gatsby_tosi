/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navbar from "./Globals/Navbar"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="a mt-5">tosi TOSI</div>
    <div className="b mt-5">tosi TOSI</div>
    <div className="c mt-5">tosi TOSI</div>
    <div className=""></div>
    <div></div>
    <div></div>
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
