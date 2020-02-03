import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StartPage from "../components/start-page/start-page"

import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Helmet>
        {/* <script src={withPrefix('pts.min.js')} type="text/javascript" /> */}
        {/* <script src={withPrefix('pts-animations.js')} type="text/javascript" /> */}
    </Helmet>
    {/* <SEO title="Home" /> */}
    {/* <h1>Hi people</h1>
    <div>
      
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    <StartPage/>
    {/* <div style={{ maxWidth: `1000px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
