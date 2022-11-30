import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavHolder = styled.div`
    background-color: red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;
export default function NavCircle() {
    return (
        <NavHolder>
            <p>Menu</p>
            <div>
                <Link to="/">home</Link>
                <Link to="login">login</Link>
                <Link to="church">church</Link>
            </div>
        </NavHolder>
    )
}