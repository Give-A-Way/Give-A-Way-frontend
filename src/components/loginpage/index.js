import NavCircle from "../navbar";
import styled from "@emotion/styled";

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

export default function Loginpage() { 
    const getData = (e) => {
        e.preventDefault();
        console.log(e)
    }
    return (
        <SignUpPageBody>
            <NavCircle/>
                <SignUpForm onSubmit={getData}>
                    <label>UserName:</label>
                    <br />
                    <SignUpInput type="text" id="fname" name="fname" />
                    <br />
                    <label>Password:</label>
                    <br />
                    <SignUpInput type="password" id="password" name="password" />
                    <br />
                    <input type="submit" style={{ margin: "0 0 20px 0" }} />
            </SignUpForm>
            <SignUpForm onSubmit={getData}>
                <label>UserName:</label>
                <br />
                <SignUpInput type="text" id="fname" name="fname" />
                <br />
                <label>Password:</label>
                <br />
                <SignUpInput type="password" id="password" name="password" />
                <br />
                <input type="submit" style={{ margin: "0 0 20px 0" }} />
            </SignUpForm>
            <SignUpForm onSubmit={getData}>
                <label>UserName:</label>
                <br />
                <SignUpInput type="text" id="fname" name="fname" />
                <br />
                <label>Password:</label>
                <br />
                <SignUpInput type="password" id="password" name="password" />
                <br />
                <input type="submit" style={{ margin: "0 0 20px 0" }} />
            </SignUpForm>
        </SignUpPageBody >
    )
}