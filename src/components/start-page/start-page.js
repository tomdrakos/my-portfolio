//eslint-disable import/first

import "./start-page.css"
import "./start-page.scss"

import React from "react"

// import Particles from 'react-particles-js';

// import { CanvasSpace, Pt, Group } from "pts"

import Gallery from "react-photo-gallery"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faCheckSquare,
  faCoffee,
  faArrowRight,
  faFileExcel,
} from "@fortawesome/free-solid-svg-icons"

import MSSqlServerIcon from '../../images/microsoft-sql-server.svg'
import TeamCityIcon from '../../images/teamcity-icon.svg'
import RestApiIcon from '../../images/rest.png'
import Avatar from '../../images/face_avatar_bcg.png';


import CSharpIcon from './images/csharp'
import JsIcon from './images/js'
import AngularIcon from './images/angular'
import SqlServerIcon from './images/sqlServer'
import BootstrapIcon from './images/bootstrap'
import CssIcon from './images/css'
import Html5Icon from './images/html5'
import GitIcon from './images/git'
import RedisIcon from './images/redis'
import JqueryIcon from './images/jquery'
import VsStudioIcon from './images/vsstudio'


import SkillIcon from './images/skill-icon'

import ScrollReveal from "scrollreveal"
// import $ from 'jquery';

library.add(fab, faCheckSquare, faCoffee, faArrowRight)

const photos = [
  {
    src: "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg",
    width: 3,
    height: 4,
  },
  {
    src: "https://images.pexels.com/photos/1236702/pexels-photo-1236702.jpeg",
    width: 1,
    height: 1,
  },
  {
    src: "https://images.pexels.com/photos/1236703/pexels-photo-1236703.jpeg",
    width: 3,
    height: 4,
  },
  {
    src: "https://images.pexels.com/photos/1236704/pexels-photo-1236704.jpeg",
    width: 3,
    height: 4,
  },
  {
    src: "https://images.pexels.com/photos/1236705/pexels-photo-1236705.jpeg",
    width: 3,
    height: 4,
  },
]

const StartPage = () => {
  return (
    <>
      <div id="pt" className="my-content u-margin-bottom-big">
        <div className="container">
          <div className="item">
            Cześć, nazywam się{" "}
            <span style={{ color: `#7510F7` }}>Tomek</span>
          </div>
          <div className="item">
            <div className="animated-text">Miło mi, że tutaj zajrzałeś.</div>
          </div>
          <div className="item">
            <div className="button page-link" dest="about">
              Trochę o mnie{" "}
              <i className="">
                <FontAwesomeIcon
                  icon="arrow-right"
                  inverse
                  transform="shrink-3"
                />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="centered">
        <div className="container flex">
          <div className="gray u-text u-text-big u-header" data-sr="enter left move 400px over 1.5s wait 0.3s">O mnie</div>
          <div className="gray u-header-underline" data-sr="enter left move 400px over 1.5s wait 0.8s"></div>
        </div>
      </div>
      <div style={{display: 'flex', 'flexDirection': 'row' }}>
        <div style={{flexBasis: '50%', 'flexGrow': 0}}>
          <img class="larger" style={{maxWidth: '50%'}} src={Avatar} alt="RestApi"
          data-sr="enter bottom over 1.5s wait 1.2s"></img>
          
        </div>
        <div style={{flexBasis: '50%', 'flexGrow': 0}}>
            <div className="container-row">
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><CSharpIcon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><JsIcon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><AngularIcon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><SqlServerIcon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><BootstrapIcon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><CssIcon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><Html5Icon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><GitIcon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><RedisIcon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><JqueryIcon /></SkillIcon>
            <SkillIcon animation={'enter right over 0.5s wait 1.2s'}><VsStudioIcon /></SkillIcon>
            {/* TeamCity */}
            <div className="item-row" data-sr="enter right over 0.5s wait 0.7s">
              <div style={{ width: 100, height: 100 }}>
                <img class="larger" src={TeamCityIcon} alt="TeamCity"></img>
              </div>
            </div>
            {/* Rest */}
            <div className="item-row" data-sr="enter right over 0.5s wait 0.7s">
              <div style={{ width: 100, height: 100 }}>
                <img class="larger" src={RestApiIcon} alt="RestApi"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1
        class="headline"
        data-sr="enter bottom and scale up 80% over 1s wait 1.3s"
      >
        W wolnej chwili trochę zdjęć.
      </h1>
      <Gallery photos={photos} />;
    </>
  )
}

export default StartPage
