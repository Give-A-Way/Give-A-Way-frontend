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
        return <a class={val.logo} onClick={() => { goToHomePage(val.link) }}>{val.name}</a>
    })
    const userSignOut = () => {
        setIsUserLogedIn(false)
        setUserData(null)
    }
    let signOutLogo = [
        <a
            class="fa fa-sign-in"
            onClick={() => {
                goToHomePage("../login")
            }}
        ></a>,
        <a
            class="fa fa-user-plus"
            onClick={() => {
                goToHomePage("../signup")
            }}
        ></a>
    ]
    return (
        <div class="center-menu-page">
            <div style={{display:navBackground}} class="nav-background"></div>
            <label class="menu-button-page" for="menu-open" aria-hidden="true">Menu</label>
            <input class="menu-open-page" id="menu-open" type="checkbox" aria-hidden="true" onClick={() => {
                setNavBackground(navBackground === "none"?"block":"none")
            }}/>
            <nav class="menu-page" role="navigation">
                {navLinkist}
                {isUserLogedIn ? <a
                    class="fa fa-sign-out"
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