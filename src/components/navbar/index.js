import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";
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

export default function NavCircle(props) {
    const [navHolderColor, setNavHolderColor] = useState("flex")
    const [navItemsDiaplay, setNavItemsDiaplay] = useState("none")
    const { isUserLogedIn, setIsUserLogedIn, setUserData } = useContext(Context)
    const showNavItems = () => {
        console.log(navHolderColor, navItemsDiaplay)
        setNavHolderColor("none");
        setNavItemsDiaplay("grid");
    }
    const hideNavItesm = () => {
        setNavHolderColor("flex")
        setNavItemsDiaplay("none")

    }
    let navLinkist = props.routerLinks.map((val, i) => {
        return <NavMenuButton key={`${i}navItem`} displayNavMenue="flex" ><Link to={val.link}>{val.name}</Link></NavMenuButton>

    })
    const userSignOut = () => {
        setIsUserLogedIn(false)
        setUserData(null)
    }

    return (
        <NavHolder>
            <NavMenuButton displayNavMenue={navHolderColor} onClick={() => { showNavItems() }}>
                <MenuText>Menu</MenuText>
            </NavMenuButton>
            <NavItems displayNavMenue={navItemsDiaplay}>
                <NavMenuButton key="navItemExit" displayNavMenue="flex" onClick={() => { hideNavItesm() }}>
                    <ExitNav onClick={() => { hideNavItesm() }}>X</ExitNav>
                </NavMenuButton>
                {isUserLogedIn ? <NavMenuButton onClick={() => {
                    userSignOut()
                    hideNavItesm()
                }} displayNavMenue="flex" >SignOut</NavMenuButton> : ""}
                {navLinkist}
            </NavItems>
        </NavHolder>
    )
}