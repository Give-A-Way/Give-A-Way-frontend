import styled from "@emotion/styled";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";
import NavCircle from "../navbar";

const SignUpFormMessage = styled.h1`

`;
const SignUpPageBody = styled.div`
`;

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

export default function SignUpPage() {
    const { setIsUserLogedIn, isUserLogedIn, setUserData } = useContext(Context)
    const [newSignUpData, setNewSignUpData] = useState(null)
    const [signUpFormMessage, setSignUpFormMessage] = useState("")
    const navigate = useNavigate();
    const goToLogInpPage = () => {
        navigate('../login');
    }
    useEffect(() => {
        async function postUser() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "companyName": newSignUpData.companyName,
                "email": newSignUpData.email,
                "userName": newSignUpData.userName,
                "password": newSignUpData.password
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            let catchData = await fetch("http://localhost:3100/authentication/register", requestOptions).then(response => response.json())
            if (!catchData.username) {
                console.log(catchData)
                setSignUpFormMessage("Username has been taken")
            } else {
                goToLogInpPage()
            }
        }
        if (newSignUpData) {
            postUser()
        }
    }, [newSignUpData])
    const getData = (e) => {
        e.preventDefault();
        if (e.target["password"].value && e.target["cpassword"].value && e.target["password"].value !== e.target["cpassword"].value) {
            setSignUpFormMessage("password do not match")
        } else if (e.target["fname"].value && e.target["email"].value && e.target["company-name"].value && e.target["password"].value && e.target["cpassword"].value) {
            setSignUpFormMessage("Loding..")
            setNewSignUpData(
                {
                    "userName": e.target["fname"].value,
                    "email": e.target["email"].value,
                    "companyName": e.target["company-name"].value,
                    "password": e.target["password"].value
                }
            )
        } else {
            setSignUpFormMessage("information missing")
        }
    }
    return (
        <SignUpPageBody>
            <NavCircle routerLinks={isUserLogedIn ? [{ link: '../', name: "home" }, { link: '../church', name: "church" }, { link: '../about', name: "about" }] : [{ link: '../', name: "home" }, { link: '../church', name: "church" }, { link: '../about', name: "about" }, { link: '../login', name: "login" }, { link: '../signup', name: "signup" }]} />
            <SignUpFormMessage>{signUpFormMessage}</SignUpFormMessage>
            {/* <SignUpForm onSubmit={getData}>
                <label >UserName:</label>
                <br />
                <SignUpInput type="text" id="fname" name="fname" />
                <br />
                <label >Email:</label>
                <br />
                <SignUpInput type="text" id="email" name="email" />
                <br />
                <label >Company Name:</label>
                <br />
                <SignUpInput type="text" id="company-name" name="company-name" />
                <br />
                <label >Password:</label>
                <br />
                <SignUpInput type="password" id="password" name="password" />
                <br />
                <label >Confirm Password:</label>
                <br />
                <SignUpInput type="password" id="cpassword" name="cpassword" />
                <br />
                <input type="submit" style={{ margin: "0 0 20px 0" }} />
            </SignUpForm> */}
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={getData}>
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>UserName:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                name="fname"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                name="email"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Company Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company Name"
                                name="company-name"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                name="password"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                name="cpassword"
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Already registered <a href="/sign-in">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        </SignUpPageBody>
    )
}