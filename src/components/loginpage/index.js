import NavCircle from "../navbar";
import styled from "@emotion/styled";
import { useEffect, useContext, useState } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";

const SignUpPageBody = styled.div``;

const SignUpForm = styled.form`
    border: 3px solid red;
    width: 250px;
    padding: 30px 0 0 0;
    text-align: center;
    margin: auto;
`;

const SignUpInput = styled.input`
    margin: 0 0 20px;
`;

export default function Loginpage() {
    const { setIsUserLogedIn, setUserData } = useContext(Context)
    const [logInAuthentication, setLogInAuthentication] = useState(null)
    const navigate = useNavigate();
    const goToLandingPage = () => {
        navigate('../');
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

            let getUserData = await fetch("http://localhost:3100/authentication/login", requestOptions)
                .then(response => response.json())
            // console.log(getUserData)
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
            <NavCircle routerLinks={[{ link: '../', name: "home" }, { link: '../signup', name: "signup" }, { link: '../church', name: "church" }]} />
            {/* <SignUpForm className="testing-here" onSubmit={getData}>
                    <label>UserName:</label>
                    <br />
                    <SignUpInput type="text" id="fname" name="fname" />
                    <br />
                    <label>Password:</label>
                    <br />
                    <SignUpInput type="password" id="password" name="password" />
                    <br />
                    <input type="submit"/>
            </SignUpForm> */}
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