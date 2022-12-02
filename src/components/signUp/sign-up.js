import styled from "@emotion/styled";
import NavCircle from "../navbar";

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
    const getData = (e) => {
        e.preventDefault();
        console.log(e)
    }
    return (
        <SignUpPageBody>
            <NavCircle routerLinks={[{ link: '../', name: "home" }, { link: '../login', name: "login" }, { link: '../church', name: "church" }]} />
            <SignUpForm onSubmit={getData}>
                <label >UserName:</label>
                <br />
                <SignUpInput type="text" id="fname" name="fname" />
                <br/>
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
                <br/>
                <input type="submit" style={{ margin: "0 0 20px 0" }} />
            </SignUpForm>
        </SignUpPageBody>
    )
}