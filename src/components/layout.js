/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import PathBcg from "../images/path_bcg4.png"
import WavesSvg from "../images/waves.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons"

library.add(faTwitter)

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

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `0 1.0875rem 1.45rem`,
      // }}
      >
        <main>{children}</main>
        <div style={{position: "relative"}}>
          {/* <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
          </div> */}
        </div>

        
        <footer>
        <img src={PathBcg} alt="Path" style={{marginBottom: -10}}></img> 
          © {new Date().getFullYear()}, Tomasz Ponikowski
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
