import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import './nav.css'

export default function NavCircle(props) {
    const [navBackground, setNavBackground] = useState("none")
    const { isUserLogedIn, setIsUserLogedIn, setUserData } = useContext(Context)
    const navigate = useNavigate();
    const goToHomePage = (link) => {
        navigate(link);
    }
    let navLinkist = [{ link: '../', logo: "icon fa fa-home" }, { link: '../church', logo: "fa fa-university" }, { link: '../about', logo: "fa fa-info-circle" }].map((val, i) => {
        return <a key={`navlink${i}`} className={val.logo} onClick={() => { goToHomePage(val.link) }}>{val.name}</a>
    })
    const userSignOut = () => {
        setIsUserLogedIn(false)
        setUserData(null)
    }
    let signOutLogo = [
        <a
            key="fa-sign-in"
            className="fa fa-sign-in"
            onClick={() => {
                goToHomePage("../login")
            }}
        ></a>,
        <a
            key="fa-sign-oup"
            className="fa fa-user-plus"
            onClick={() => {
                goToHomePage("../signup")
            }}
        ></a>
    ]
    return (
        <div className="center-menu-page">
        
            <input className="menu-open-page" id="menu-open" type="checkbox" aria-hidden="true" onClick={() => {
                setNavBackground(navBackground === "none"?"block":"none")
            }}/>
            <label className="menu-button-page" htmlFor="menu-open" aria-hidden="true">Menu</label>
            <div className="nav-background"></div>
            <nav className="menu-page" role="navigation">
                {navLinkist}
                {isUserLogedIn ? <a
                    key="fa-sign-out"
                    className="fa fa-sign-out"
                    onClick={() => {
                        userSignOut()
                        goToHomePage("../")
                    }}
                ></a> : signOutLogo
                }
            </nav>
        </div>

    )
}