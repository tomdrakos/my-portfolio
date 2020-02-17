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

import TeamCityIcon from "../../images/teamcity-icon.svg"
import RestApiIcon from "../../images/rest.png"
import Avatar from "../../images/face_avatar2.png"
import Logo from "../../images/logo.png"
import PathBcg from "../../images/path_bcg2.png"
import Camera from "../../images/camera.png"

import CSharpIcon from "./images/csharp"
import JsIcon from "./images/js"
import AngularIcon from "./images/angular"
import SqlServerIcon from "./images/sqlServer"
import BootstrapIcon from "./images/bootstrap"
import CssIcon from "./images/css"
import Html5Icon from "./images/html5"
import GitIcon from "./images/git"
import RedisIcon from "./images/redis"
import JqueryIcon from "./images/jquery"
import VsStudioIcon from "./images/vsstudio"

import SkillIcon from "./images/skill-icon"

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
        <a className="logo" href="/">
          <img src={Logo} alt="Logo"></img>
        </a>
        <div className="container column">
          <div className="item">
            {/* <span style={{ color: `#7510F7` }}>Tomek</span> */}
            <span style={{ color: `#7510F7` }}>Cześć, co u Ciebie? </span>
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
      {/* <div className="centered">
        <div className="container flex">
          <div className="gray u-text u-text-big u-header" data-sr="enter left move 400px over 1.5s wait 0.3s">O mnie</div>
          <div className="gray u-header-underline" data-sr="enter left move 400px over 1.5s wait 0.8s"></div>
        </div>
      </div> */}
      <div className="container content-center violet-main-background">
        {/* <div className="gray u-text u-text-big u-header" data-sr="enter left move 400px over 1.5s wait 0.3s">O mnie</div> */}
        {/* <div className="gray u-header-underline" data-sr="enter left move 400px over 1.5s wait 0.8s"></div> */}
        <section className="flex section">
        
          <h2>Hej, mam na imię Tomek i jestem full stack developerem.</h2>
          <div>Kilka technologi oraz narzędzi z którymi miałem okazję pracować i wiem z czym to się jje :) </div>
        </section>
      </div>

      <div className="is-narrow personal-info">
        <div className="left">
          <img
            class="larger"
            style={{ maxWidth: "25%" }}
            src={Avatar}
            alt="RestApi"
            data-sr="enter bottom move 50px over 1.5s wait 1.2s"
          ></img>
        </div>
        <div className="right">
          <div className="container-row skills-bg">
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <CSharpIcon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <JsIcon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <AngularIcon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <SqlServerIcon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <BootstrapIcon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <CssIcon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <Html5Icon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <GitIcon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <RedisIcon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <JqueryIcon />
            </SkillIcon>
            <SkillIcon animation={"enter right over 0.5s wait 1.2s"}>
              <VsStudioIcon />
            </SkillIcon>
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
      {/* <div>
        sskflsdjfsdljk
        <div style={{ backgroundImage: `url(${PathBcg})` }} />
      </div> */}
      
      
      <div className="container content-center violet-main-background">
        {/* <div className="gray u-text u-text-big u-header" data-sr="enter left move 400px over 1.5s wait 0.3s">O mnie</div> */}
        {/* <div className="gray u-header-underline" data-sr="enter left move 400px over 1.5s wait 0.8s"></div> */}
        <section className="flex section">
        
          <h2>W wolnych chwilach lapie za apart i chwytam mome.</h2>
          <div style={{ width: 200, height: 200 }}>
                <img class="larger" src={Camera} alt="Camera"></img>
              </div>
        </section>
      </div>
      
      <Gallery photos={photos} />
    </>
  )
}

export default StartPage
