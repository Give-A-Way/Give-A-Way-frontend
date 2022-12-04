import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavCircle from "../navbar";

const SignUpFormMessage = styled.h1`

`;
const SignUpPageBody = styled.div`
    background-color:gray;
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
            <NavCircle routerLinks={[{ link: '../', name: "home" }, { link: '../login', name: "login" }, { link: '../church', name: "church" }]} />
            <SignUpFormMessage>here{signUpFormMessage}</SignUpFormMessage>
            <SignUpForm onSubmit={getData}>
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
            </SignUpForm>
        </SignUpPageBody>
    )
}