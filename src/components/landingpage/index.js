import styled from "@emotion/styled";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./landingpage.css";
import { useEffect, useContext } from "react";
import Context from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";

function NavCircle(props) {

  const { isUserLogedIn, setIsUserLogedIn, setUserData, userData } = useContext(Context)
  const navigate = useNavigate();
  const goToHomePage = (link) => {
    navigate(link);
  }
  let navLinkist = props.routerLinks.map((val, i) => {
    return <li className="menu-item" key={`nave${i}`}><a onClick={() => { goToHomePage(val.link) }}>{val.name}</a></li >
  })
  const userSignOut = () => {
    setIsUserLogedIn(false)
    setUserData(null)
  }
  console.log(userData)

  return (
    <div>
      <nav className="menu">
        <svg id="home-text" width="400" height="300" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>background</title>
            <rect style={{ fill: "none" }} id="canvas_background" height="402" width="400" y="-1" x="-1" />
            <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
              <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%" />
            </g>
          </g>
          <g>
            <title>cool</title>
            <path id="cool" style={{ fill: "none" }} d="M 30 200 A 43 160 270 1 1 352 200 " />
          </g>
          <text width="400">
            <textPath
              id="home-header"
              href="#cool"
              style={{
                fontSize: "30px",
                fontFamily: `'Quicksand', sans-serif`,
                textAlign: "center",
                fontWeight: "1500"
              }}>
              Welcome to Give-A-Way
            </textPath>
          </text>
        </svg>
        <input className="menu-toggler" type="checkbox" />
        <label id="main-nav-text">Start Here</label>
        <ul>
          {navLinkist}
          {isUserLogedIn ? <li className="menu-item" key={`signOuthere`}><a onClick={() => {
            userSignOut()
            goToHomePage("./")
          }}>Sign Out</a></li > : ""}
        </ul>
      </nav>
      <div className="warning">
        <div className="warning-sign">
          <h1>⚠️</h1>
        </div>
        <div className="warning-text-holder">
          <h2> Warning: This is a demo application.</h2>
          <p className="warning-text">Please do not use your real name or email. Use a fake name and a placeholder email address for testing purposes only.</p>
          <p style={{margin:0}}>ex email:  nlnlas@kmksabd.shcaewa</p>
        </div>
      </div>
    </div >
  )
}

export default function Landingpage() {
  const { isUserLogedIn } = useContext(Context)
  return (
    <div>
      <NavCircle routerLinks={isUserLogedIn ? [{ link: '../', name: "Home" }, { link: '../church', name: "Donate" }, { link: '../about', name: "About" }] : [{ link: '../', name: "Home" }, { link: '../church', name: "Donate" }, { link: '../about', name: "About" }, { link: '../login', name: "Sign in" }, { link: '../signup', name: "Sign up" }]} />
    </div>
  );
}
