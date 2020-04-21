/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import PathBcg from "../images/path_bcg4.png"
import WavesSvg from "../images/waves.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons"

import Avatar from "../images/face_avatar2.png"


library.add(faTwitter)


const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    
  }, [])

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      

      {isLoading && (
        <div className="loading-screen">
           <a className="logo spinit" href="/">
            <img src={Avatar} alt="Logo"></img>
          </a>
        </div>
      )}
      

      {!isLoading && (
        <main>{children}</main>
      )}

      {!isLoading && (
        <footer>
        <img src={PathBcg} alt="Path" style={{marginBottom: -10}}></img> 
          © {new Date().getFullYear()}, Tomasz Ponikowski
          {` `}
        </footer>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
