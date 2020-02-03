import React from "react"

import "./start-page.css"

import {CanvasSpace, Pt, Group} from "pts"

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
      <div id="pt" className="my-content">
        <div className="container">
          <div className="item">Cześć, nazywam się <span style={{color: `#3d9df1`}}>Tomek</span></div>
          <div className="item">Miło mi Ciebie tutaj gościć.</div>
        </div>
      </div>
    </>
  )
}

export default StartPage
