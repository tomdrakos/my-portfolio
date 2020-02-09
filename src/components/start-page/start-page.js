import React from "react"

import "./start-page.css"

import Particles from 'react-particles-js';

import { CanvasSpace, Pt, Group } from "pts"

const StartPage = () => {

  return (
    <>
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        START PAGE
      </div> */}

      {/* <div id="particles-js"></div> <div class="count-particles">
        <span class="js-count-particles">--</span> particles
      </div> */}

      <div id="pt" className="my-content">
        <div className="container">
          <div className="item">Cześć, nazywam się <span style={{ color: `#3d9df1` }}>Tomek</span></div>
          <div class="item">
            <div className="animated-text">Miło mi Cię tutaj gościć.</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default StartPage
