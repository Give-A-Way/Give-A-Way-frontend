import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavHolder = styled.div`
    position: sticky;
    top: 20px;
    left: 40px;
    width: 100px;
    height: 100px;
`;
const NavMenuButton = styled.div`
    cursor: pointer;
    background-color: red;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    display : ${props => props.displayNavMenue};
    justify-content: center;
    align-items: center;
    margin: 5px;
`;
const NavItems = styled.div`
    display : ${props => props.displayNavMenue};
    width: 150px;
    grid-template-columns: 1fr 1fr;
`;
const MenuText = styled.p`
    margin: 0;
    
`
const ExitNav = styled.h1`
    margin: 0px;
`

export default function NavCircle() {
    const [navHolderColor, setNavHolderColor] = useState("flex")
    const [navItemsDiaplay, setNavItemsDiaplay] = useState("none")

    const showNavItems = () => {
        setNavHolderColor("none")
        setNavItemsDiaplay("grid")
    }
    const hideNavItesm = () => {
        setNavHolderColor("flex")
        setNavItemsDiaplay("none")
        console.log(navHolderColor, navItemsDiaplay)
    }
    return (
        <NavHolder onClick={() => { showNavItems() }}>
            <NavMenuButton displayNavMenue={navHolderColor}>
                <MenuText>Menu</MenuText>
            </NavMenuButton>
            <NavItems displayNavMenue={navItemsDiaplay}>
                <NavMenuButton displayNavMenue="flex" >
                    <Link to="/">home</Link>
                </NavMenuButton>
                <NavMenuButton displayNavMenue="flex" onClick={()=>{hideNavItesm()}}>
                    <ExitNav onClick={() => { hideNavItesm() }}>X</ExitNav>
                </NavMenuButton>
                <NavMenuButton displayNavMenue="flex">
                    <Link to="login">login</Link>
                </NavMenuButton>
                <NavMenuButton displayNavMenue="flex">
                    <Link to="signup">signUp</Link>
                </NavMenuButton>
                <NavMenuButton displayNavMenue="flex">
                    <Link to="church">churches</Link>
                </NavMenuButton>
            </NavItems>
        </NavHolder>
    )
}