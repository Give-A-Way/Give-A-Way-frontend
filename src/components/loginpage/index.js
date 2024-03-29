import NavCircle from "../navbar";
import styled from "@emotion/styled";
import { useEffect, useContext, useState } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";

const SignUpPageBody = styled.div``;


export default function Loginpage() {
    const { setIsUserLogedIn, isUserLogedIn, setUserData } = useContext(Context)
    const [logInAuthentication, setLogInAuthentication] = useState(null)
    const navigate = useNavigate();
    const goToLandingPage = () => {
        navigate('../church');
    }
    useEffect(() => {
        async function run() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "userName": logInAuthentication.userName.value,
                "password": logInAuthentication.password.value
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            let getUserData = await fetch("https://give-a-way-backend-production.up.railway.app/authentication/login", requestOptions)
                .then(response => response.json())
            if (getUserData.message) {
                console.log(getUserData.message)
            } else {
                console.log(getUserData[0])
                setIsUserLogedIn(true)
                setUserData(getUserData[0])
                goToLandingPage()
            }
        }
        if (logInAuthentication) {
            run()

        }
    }, [logInAuthentication])
    const getData = (e) => {
        e.preventDefault();
        setLogInAuthentication({
            userName: e.target["fname"],
            password: e.target["password"],
        })
    }

    return (
        <SignUpPageBody>
            <NavCircle routerLinks={isUserLogedIn ? [{ link: '../', name: "home" }, { link: '/', name: "church" }, { link: '../about', name: "about" }] : [{ link: '../', name: "home" }, { link: '../church', name: "church" }, { link: '../about', name: "about" }, { link: '../login', name: "login" }, { link: '../signup', name: "signup" }]} />
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={getData}>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>UserName:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter UserName"
                                name="fname"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </div>
        </SignUpPageBody >
    )
}