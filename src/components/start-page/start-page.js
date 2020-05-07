import "./start-page.css"
import "./start-page.scss"

import React from "react"

// import Particles from 'react-particles-js';

// import { CanvasSpace, Pt, Group } from "pts"

// import { useStaticQuery, graphql } from "gatsby"

import * as Scroll from "react-scroll"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

import Gallery from "react-photo-gallery"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faTwitter } from "@fortawesome/free-brands-svg-icons"
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
import Camera from "../../images/Camera.png"

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

// import ScrollReveal from "scrollreveal"

import p1 from "../../images/gallery/BLUE_small.png"
import p2 from "../../images/gallery/DSC03804.jpg"
import p3 from "../../images/gallery/DSC04335.jpg"
import p4 from "../../images/gallery/DSC04485.jpg"
//import p5 from "../../images/gallery/DSC04493.JPG"
// import p6 from "../../images/gallery/IMG_20190324_150439_4.jpg"
import p7 from "../../images/gallery/Untitled.jpg"
import p8 from "../../images/gallery/IMG_20200318_194950-06.jpg"
import p9 from "../../images/gallery/IMG_20200326_203936-02.jpeg"
import p10 from "../../images/gallery/IMG_20200326_205107-01.jpeg"

import SocialIcons from "./social-icons"

library.add(fab, faCheckSquare, faCoffee, faArrowRight, faTwitter)

// const data = useStaticQuery(graphql`
// query AssetsPhotos {
//   allFile {
//     edges {
//       node {
//         id
//         dir
//         name,
//         childImageSharp {
//           fixed {
//              src
//           }
//         }
//         # childImageSharp {
//         #   fluid(maxWidth: 300) {
//         #     ...GatsbyImageSharpFluid
//         #   }
//         # }
//       }
//     }
//   }
// }
//   `)

const photos = [
  {
    src: p1,
    width: 5.5,
    height: 3,
  },
  {
    src: p2,
    width: 4.5,
    height: 3,
  },
  {
    src: p3,
    width: 4.5,
    height: 3,
  },
  {
    src: p4,
    width: 6,
    height: 4,
  },
  // {
  //   src: p6,
  //   width: 4,
  //   height: 3,
  // },
  {
    src: p7,
    width: 5,
    height: 3,
  },
  {
    src: p8,
    width: 4,
    height: 3,
  },
  {
    src: p9,
    width: 4,
    height: 3,
  },
  {
    src: p10,
    width: 4,
    height: 3,
  },
  // {
  //   src: p5,
  //   width: 4.7,
  //   height: 3,
  // },
]

function columns(containerWidth) {
  let columns = 1
  if (containerWidth >= 500) columns = 2
  if (containerWidth >= 900) columns = 3
  return columns
}

const StartPage = () => {
  const goToPersonalInfo = () => {
    scroller.scrollTo("scroll-to-pinfo", {
      duration: 1200,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    })
  }

  return (
    <>
      <div id="pt" className="my-content u-margin-bottom-big">
        <div className="nav">
          <a className="logo" href="/">
            <img src={Avatar} alt="Logo"></img>
          </a>
          <SocialIcons />
        </div>

        <div className="container column">
          <div className="item">
          <h1><span style={{ color: `#7510F7`}}>Cześć, co u Ciebie? </span></h1>
          {/* <span style={{ color: `#7510F7`}}>Cześć, co u Ciebie? </span> */}
            
          </div>
          <div className="item">
            <div className="animated-text">Miło mi, że tutaj zajrzałeś.</div>
          </div>
          <div className="item">
            <div
              className="button page-link"
              dest="about"
              onClick={goToPersonalInfo}
            >
              Trochę o mnie{" "}
              <i className="">
                <FontAwesomeIcon
                  icon="arrow-right"
                  inverse
                  transform="shrink-3"
                  style={{color:"rgba(255, 255, 255, 0.7)"}}
                />
              </i>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="spacer"></div> */}
      <Element name="scroll-to-pinfo" className="element">
        <div className="container content-center violet-main-background">
          <section id="pinfo" className="flex section">
            <h2>Mam na imię Tomek i jestem full stack developerem.</h2>
            <div>
              Kilka technologi oraz narzędzi z którymi miałem okazję pracować.{" "}
            </div>
          </section>
        </div>
      </Element>
      <div className="is-narrow personal-info">
        <div className="left">
          <img className="second-logo" src={Avatar} alt="Avatar "></img>
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
              <div>
                <img class="larger" src={TeamCityIcon} alt="TeamCity"></img>
              </div>
            </div>
            {/* Rest */}
            <div className="item-row" data-sr="enter right over 0.5s wait 0.7s">
              <div>
                <img class="larger" src={RestApiIcon} alt="RestApi"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container content-center violet-main-background small">
        <section className="flex section">
          <h2>
            W wolnych chwilach łapie za aparat i staram się co wypstrykać.
          </h2>
          <div style={{ width: 200, height: 200 }}>
            <img class="larger" src={Camera} alt="Camera"></img>
          </div>
        </section>
      </div>
      <div className="gallery-wrapper">
        <Gallery photos={photos} direction="column" columns={columns} />
      </div>
    </>
  )
}

export default StartPage
