import styled from "@emotion/styled";

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
            <SignUpForm onSubmit={getData}>
                <label for="fname">UserName:</label>
                <br />
                <SignUpInput type="text" id="fname" name="fname" />
                <br/>
                <label for="email">Email:</label>
                <br />
                <SignUpInput type="text" id="email" name="email" />
                <br />
                <label for="company-name">Company Name:</label>
                <br />
                <SignUpInput type="text" id="company-name" name="company-name" />
                <br />
                <label for="password">Password:</label>
                <br />
                <SignUpInput type="password" id="password" name="password" />
                <br />
                <label for="cpassword">Confirm Password:</label>
                <br />
                <SignUpInput type="password" id="cpassword" name="cpassword" />
                <br/>
                <input type="submit" style={{ margin: "0 0 20px 0" }} />
            </SignUpForm>
        </SignUpPageBody>
    )
}