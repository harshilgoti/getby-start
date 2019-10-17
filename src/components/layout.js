/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
console.log(data)
  return (
    <>
      <Header siteTitle={"Dentek Material Hub"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "full",
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`
          }}>
          © {new Date().getFullYear()}, Built By
          {` `}
          {/* <a href="https://www.gatsbyjs.org"><span style={{color:"white"}}>Gatsby</span></a> */}
          <Link to="/harshil/" style={{color:"white"}}>Harshil</Link>
          <Link to="/harshil1/" style={{color:"red"}}>harshil1</Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
