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
import PathBcg from "../images/Path 23.png"
import WavesSvg from "../images/waves.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons"

import Avatar from "../images/face_avatar2.png"

import SocialIcons from "./start-page/social-icons"


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
      
      <main style={{display: isLoading ? 'none' : 'block'}}>{children}</main>
      <div class="footer" style={{display: isLoading ? 'none' : 'block'}}>
        <div style={{paddingBottom: '80px', backgroundColor: 'white'}}></div>
          <div  className="footer-background">
            <span style={{color: 'white'}}>© {new Date().getFullYear()} Tomasz Ponikowski</span>
            <span><SocialIcons /></span>  
        </div>
      </div>
      
      {/* <div style={{position: 'relative'}}>
      <div style={{position: 'absolute', top: '50%', left: '50%', color: 'white'}}>© {new Date().getFullYear()}  
          <span style={{color: 'white'}}> Tomasz Ponikowski</span> 
          <SocialIcons />
        </div>
        <img src={PathBcg} alt="Path" style={{marginBottom: -10, backgroundColor: 'white', maxWidth: '400%'}}></img> 
      </div>
       */}
      {/* <footer style={{display: isLoading ? 'none' : 'block'}}>
      <img src={PathBcg} alt="Path" style={{marginBottom: -10, backgroundColor: 'white'}}></img> 
        © {new Date().getFullYear()}, Tomasz Ponikowski
        {` `}
      </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
