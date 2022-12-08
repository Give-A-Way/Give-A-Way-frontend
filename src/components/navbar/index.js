import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import './nav.css'

export default function NavCircle(props) {

    const { isUserLogedIn, setIsUserLogedIn, setUserData } = useContext(Context)
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

    return (
        <nav className="menu1">
            <input className="menu-toggler" type="checkbox" />
            <label ></label>
            <ul>
                {navLinkist}
                {isUserLogedIn ? <li className="menu-item" key={`signOuthere`}><a onClick={() => {
                    userSignOut()
                    goToHomePage("./")
                }}>Sign Out</a></li > : ""}
            </ul>
        </nav>
    )
}