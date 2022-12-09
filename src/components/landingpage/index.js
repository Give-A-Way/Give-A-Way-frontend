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
        <input className="menu-toggler" type="checkbox" />
        <label >Menu</label>
        <ul>
          {navLinkist}
          {isUserLogedIn ? <li className="menu-item" key={`signOuthere`}><a onClick={() => {
            userSignOut()
            goToHomePage("./")
          }}>Sign Out</a></li >:""}
        </ul>
      </nav>
    </div >
  )
}

export default function Landingpage() {
  const { isUserLogedIn } = useContext(Context)
  return (
    <div>
      <NavCircle routerLinks={isUserLogedIn ? [{ link: '../', name: "Home" }, { link: '../church', name: "Church" }, { link: '../about', name: "About" }] : [{ link: '../', name: "Home" }, { link: '../church', name: "Church" }, { link: '../about', name: "About" }, { link: '../login', name: "Sign in" }, { link: '../signup', name: "Sign up" }]} />
    </div>
  );
}
